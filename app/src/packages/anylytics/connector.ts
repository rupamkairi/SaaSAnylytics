const WS_SERVER_URL = "ws://localhost:30005/ws";

let instance: AnylyticsConnector | null;
let _nonce = crypto.randomUUID();

export class AnylyticsConnector {
  uri: string;
  static ws: WebSocket;

  constructor(uri?: string) {
    console.log("AnylyticsConnector constructor", uri, WS_SERVER_URL);
    this.uri = uri ?? WS_SERVER_URL;

    if (instance instanceof AnylyticsConnector) {
      return instance;
    }

    AnylyticsConnector.ws = new WebSocket(this.uri);

    instance = this;
    return instance;
  }

  static send(data: any) {
    // if (!AnylyticsConnector) return; // !This blocks load event
    if (!AnylyticsConnector.ws?.readyState) return;

    data = {
      nonce: _nonce,
      timestamp: new Date().getTime(),
      ...data,
    };
    AnylyticsConnector.ws.send(JSON.stringify(data));
  }
}
