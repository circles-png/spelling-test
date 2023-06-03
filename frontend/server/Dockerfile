FROM rustlang/rust:nightly
COPY ./ ./frontend
WORKDIR /frontend
RUN rm -rf target
RUN cargo build --release
EXPOSE 80
ENV ROCKET_PORT=80
ENV ROCKET_ADDRESS=0.0.0.0
CMD ["./target/release/spelling-server"]
