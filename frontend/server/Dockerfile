FROM rustlang/rust:nightly
COPY ./ ./frontend
WORKDIR /frontend
RUN cargo build --release
ENV ROCKET_ENV=production
EXPOSE 80
CMD ["./target/release/spelling-server"]
