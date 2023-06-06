import { For, createEffect, createSignal } from "solid-js";
import tracker from "~/plugins/ably";

export default function Publisher() {
  const [id, setId] = createSignal(1);
  const [projects, setProjects] = createSignal<number[]>([id(), 2, 3]);
  const [status, setStatus] = createSignal("NOT_CONNECTED");
  const [message, setMessage] = createSignal("");

  (async function connectToChannel() {
    await tracker.connect();

    setTimeout(() => {
      setStatus("CONNECTED");
    }, 1000);
  })();

  async function publishToChannel() {
    setMessage("");
    await tracker.publish();
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={message()}
          onInput={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            publishToChannel();
          }}
        >
          Push Message
        </button>
      </form>
    </div>
  );
}
