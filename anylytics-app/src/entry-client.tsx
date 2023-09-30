import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { mount, StartClient } from "solid-start/entry-client";
import AnylyticsConnector from "./packages/anylytics/connector";

// const queryClient = new QueryClient({});

mount(
  () => (
    // <QueryClientProvider client={queryClient}>
    <StartClient />
    // </QueryClientProvider>
  ),
  document
);

// Following is only required since we are implementing a demo page
new AnylyticsConnector(import.meta.env.VITE_WS_URL);
