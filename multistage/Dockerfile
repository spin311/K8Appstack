FROM gcc:4.9 AS kontejnr
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
RUN gcc -o myapp main.c
CMD ["./myapp"]

FROM nginx
COPY --from=kontejnr /usr/src/myapp/myapp /usr/share/nginx/html