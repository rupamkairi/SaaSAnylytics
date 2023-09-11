import { createEffect, createSignal } from "solid-js";
import { Button } from "~/components/ui/button";
import { channel } from "./client/pusher";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    channel.bind_global((data: any) => {
      console.log(data);
    });
  }, []);

  return (
    <div>
      <Button onClick={() => setCount(count() + 1)}>Clicks: {count()}</Button>
      <Button
        onClick={() => {
          const data = { message: "hello" };
        }}
      >
        Send
      </Button>
    </div>
  );
}
