import Pusher from "pusher-js";

export const pusher = new Pusher("a09c6ff67c24157d75ba", {
  cluster: "ap3",
  forceTLS: true,
});

export const channel = pusher.subscribe("");
