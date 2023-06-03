FROM rustlang/rust:nightly
COPY ./ ./backend
WORKDIR /backend
RUN rm words.txt filtered_words.txt
RUN cargo build --release
ENV ROCKET_ENV=production
EXPOSE 80
CMD ["./target/release/spelling-api"]
