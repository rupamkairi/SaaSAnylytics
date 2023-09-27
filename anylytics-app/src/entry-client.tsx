import { mount, StartClient } from "solid-start/entry-client";
import AnylyticsConnector from "./packages/anylytics/connector";

mount(() => <StartClient />, document);

new AnylyticsConnector(import.meta.env.VITE_WS_URL);
