package api

import (
	"net/http"
	"os"
	"path/filepath"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	// Define the path to the index.html file
	path := filepath.Join("..", "static", "index.html")

	// Open the file
	file, err := os.Open(path)
	if err != nil {
		http.Error(w, "File not found", http.StatusNotFound)
		return
	}
	defer file.Close()

	// Serve the file as the response
	http.ServeFile(w, r, path)
}
