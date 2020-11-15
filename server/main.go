package main

import (
	"fmt"
	"log"
	"net/http"

	"go_todo/server/router"
)

func main() {
	r := router.Router()
	fmt.Println("Starting server on the port 8080...")
	http.Handle("/", http.FileServer(http.Dir("./web")))
	http.Handle("/api", r)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
