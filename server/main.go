package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"go_todo/server/router"
)

func main() {
	r := router.Router()
	// Production
	port := os.Getenv("PORT")

	if len(port) == 0 {
		// Local
		port = ":8080"
	}

	fmt.Println("Starting server on the port", port)
	http.Handle("/", http.FileServer(http.Dir("./web")))
	http.Handle("/api", r)
	//log.Fatal(http.ListenAndServe(":8080", nil))
	log.Fatal(http.ListenAndServe(port, nil))
}
