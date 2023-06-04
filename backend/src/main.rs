#![feature(file_create_new)]

#[macro_use]
extern crate rocket;

use reqwest::get;
use rocket::{Response, http::Header};
use std::{
    fs::File,
    io::{self, Read, Write},
};
use rocket::response::Responder;

#[derive(Responder)]
struct WordResponder {
    word: String,
    header: Header<'static>,
}

#[get("/api/word")]
fn random_word() -> WordResponder {
    let mut words = String::new();
    File::open("words.txt")
        .unwrap()
        .read_to_string(&mut words)
        .unwrap();
    let words = words.split('\n').collect::<Vec<&str>>();
    WordResponder {
        word: (words[(rand::random::<f32>() * words.len() as f32) as usize]).into(),
        header: Header::new("Access-Control-Allow-Origin", "*"),
    }
}

#[launch]
async fn rocket() -> _ {
    match download_all_words().await {
        Ok(_) => {}
        Err(error) => {
            panic!(
                "{}",
                make_purple(&format!("error downloading words: {}", error))
            );
        }
    }

    rocket::build().mount("/", routes![random_word])
}

async fn download_all_words() -> Result<(), String> {
    log("`download_all_words` called");
    log("attempting to create destination file...");
    match File::create_new("words.txt") {
        Ok(mut file) => {
            log("file `words.txt` does not exist; downloading words...");
            let words =
                "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";
            log("downloading words...");
            let words = match get(words).await {
                Ok(response) => match response.text().await {
                    Ok(text) => text,
                    Err(_) => return Err("error reading response text".to_string()),
                },
                Err(_) => return Err("error downloading words".to_string()),
            };
            log("writing words to file...");
            file.write_all(words.as_bytes()).unwrap();
            log("done!")
        }
        Err(_) => log("file `words.txt` already exists; skipping download"),
    }
    Ok(())
}

fn filter_words(length: u8) -> Result<Vec<String>, io::Error> {
    log("`filter_words` called");
    log("attempting to create destination file...");
    match File::create_new("filtered_words.txt") {
        Ok(mut file) => {
            log("destination file does not exist; creating...");
            log("creating word buffer...");
            let mut words = String::new();
            log("reading words...");
            let bytes = File::open("words.txt")?.read_to_string(&mut words)?;
            log(&format!("read {} bytes", bytes));
            log("making vector...");
            let words: Vec<&str> = words.split('\n').collect();
            log("filtering words...");
            let words: Vec<&str> = words
                .into_iter()
                .filter(|word| word.len() <= length as usize)
                .collect();
            log(&format!("writing {} words to file...", words.len()));
            for word in words {
                file.write_all(word.as_bytes())?;
                file.write_all("\n".as_bytes())?;
            }
            log("done!");
        }
        Err(_) => log("destination file already exists; skipping filtering"),
    };
    Ok({
        let mut words = String::new();
        File::open("filtered_words.txt")?.read_to_string(&mut words)?;
        let words: Vec<String> = words.split('\n').map(|word| word.to_string()).collect();

        words
    })
}

fn make_purple(message: &str) -> String {
    format!("\x1b[35m{}\x1b[0m", message)
}

fn log(message: &str) {
    println!("{}", make_purple(message));
}
