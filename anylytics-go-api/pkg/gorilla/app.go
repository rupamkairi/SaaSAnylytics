package gorillaApp

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
)

var (
	upgrader = websocket.Upgrader{}
)

var handleConnections = func(w http.ResponseWriter, r *http.Request) {
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}
	defer ws.Close()

	ws.WriteMessage(1, []byte("Hello Client!"))
}

func Init() {
	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/ws", handleConnections)
	http.ListenAndServe(":3000", router)
}
