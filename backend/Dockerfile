FROM rustlang/rust:nightly
COPY ./ ./backend
WORKDIR /backend
RUN rm -rf ./target
RUN cargo build --release
EXPOSE 80
ENV ROCKET_PORT=80
ENV ROCKET_ADDRESS=0.0.0.0
CMD ["./target/release/spelling-api"]
