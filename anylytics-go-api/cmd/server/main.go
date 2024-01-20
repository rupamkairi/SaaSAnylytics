package main

import (
	"fmt"

	gorillaApp "github.com/rupamkairi/anylytics/pkg/gorilla"
)

func main() {
	// fiberApp.Init()
	gorillaApp.Init()

	fmt.Println("Server Started!")
}
