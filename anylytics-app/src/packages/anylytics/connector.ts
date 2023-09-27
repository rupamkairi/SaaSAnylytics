let instance: AnylyticsConnector | null;

export default class AnylyticsConnector {
  uri: string;
  static ws: WebSocket;

  constructor(uri?: string) {
    this.uri = uri ?? import.meta.env.VITE_WS_URL;

    if (instance instanceof AnylyticsConnector) {
      return instance;
    }

    AnylyticsConnector.ws = new WebSocket(this.uri);

    instance = this;
    return instance;
  }
}
