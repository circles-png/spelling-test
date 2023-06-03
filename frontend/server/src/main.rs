use reqwest::get;
use rocket::fs::{relative, FileServer};

#[macro_use]
extern crate rocket;

#[get("/word")]
async fn word_api() -> String {
    get("http://backend/api/word")
        .await
        .unwrap()
        .text()
        .await
        .unwrap()
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", FileServer::from(relative!("dist")))
        .mount("/api", routes![word_api])
}
