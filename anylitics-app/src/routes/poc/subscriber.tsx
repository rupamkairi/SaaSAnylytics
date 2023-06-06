import { For, createEffect, createSignal } from "solid-js";
import tracker from "~/plugins/ably";

export default function Subscribe() {
  const [id, setId] = createSignal(1);
  const [projects, setProjects] = createSignal<number[]>([id(), 2, 3]);
  const [status, setStatus] = createSignal("NOT_CONNECTED");
  const [messages, setMessages] = createSignal(["Started"]);

  (async function connectToChannel() {
    await tracker.connect();

    setTimeout(() => {
      setStatus("CONNECTED");
      subscribeToChannel();
    }, 1000);
  })();

  async function subscribeToChannel() {
    await tracker.subscribe();
    // console.log("Message received");
  }

  return (
    <div>
      <div>
        <label>Choose Project </label>
        <select value={id()} onInput={(e) => setId(+e.target.value)}>
          <For each={projects()}>
            {(el) => <option value={el}>{el}</option>}
          </For>
        </select>
      </div>
      <p>Project Id {id()}</p>
      <p>Connection Status {status()}</p>
      <br />
      <p>Messages</p>
      <ul>
        <For each={messages()}>
          {(el) => <li>{JSON.stringify(el, null, 2)}</li>}
        </For>
      </ul>
    </div>
  );
}
