// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";
import { AnylyticsConnector } from "./packages/anylytics";
import { WS_SERVER_URL } from "./config";
import "./app.css";

mount(() => <StartClient />, document.getElementById("app")!);

new AnylyticsConnector(WS_SERVER_URL);
