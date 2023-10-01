import { createQuery } from "@tanstack/solid-query";
import { Match, Switch, createEffect } from "solid-js";
import Table from "~/components/UI/Table";

export default function Dashboard() {
  const query = createQuery(
    () => ["/data"],
    () =>
      fetch("http://localhost:3003/api/data")
        .then((res) => res.text())
        .then((data) => {
          return data
            .replaceAll("\\", "")
            .split("\n")
            .map((el) => (el ? JSON.parse(el) : null))
            .filter((el) => el);
        })
    //   data
    //     .replaceAll("\\", "")
    //     .split("\n")
    //     .map((el) => (el ? JSON.parse(el) : null))
    //     .filter((el) => el)
    // )
  );

  createEffect(() => {
    if (query.data) {
      // console.log(query.data);
      // const data = query.data;
      // .replaceAll("\\", "")
      // .split("\n")
      // .map((el) => (el ? JSON.parse(el) : null))
      // .filter((el) => el);
      // console.log(data);
    }
  }, [query.isSuccess]);

  return (
    <div>
      <h1>Dashboard</h1>
      <Switch>
        <Match when={query.isLoading}>Loading...</Match>
        <Match when={query.isError}>
          <p>Error</p>: {}
        </Match>
        <Match when={query.isSuccess}>
          <p>Success</p>
          {/* <pre>{JSON.stringify(query.data!, null, 2)}</pre> */}
          <Table data={query.data!} />
        </Match>
      </Switch>
    </div>
  );
}
