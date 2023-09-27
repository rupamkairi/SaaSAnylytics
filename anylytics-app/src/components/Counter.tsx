import { createEffect, createSignal } from "solid-js";
import { default as connector } from "~/packages/anylytics/connector";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {}, []);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count() + 1);
          connector.ws.send("Count " + count());
          connector.ws.onmessage = (event) => {
            console.log(event);
          };
        }}
      >
        Clicks: {count()}
      </button>
    </div>
  );
}
