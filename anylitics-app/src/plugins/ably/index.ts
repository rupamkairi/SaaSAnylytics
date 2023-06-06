import { Realtime, Types } from "ably";
import { ABLY_ROOT_KEY } from "~/constants/ably";

const DEFAULT_CHANNEL_NAME = "getting-started";

export class Tracker {
  ably: Types.RealtimePromise;
  channel: Types.RealtimeChannelPromise | null = null;
  channelName: string = DEFAULT_CHANNEL_NAME;

  constructor() {
    // console.log(ABLY_ROOT_KEY);
    this.ably = new Realtime.Promise(ABLY_ROOT_KEY);
    // this.channel = this.ably.channels.get(this.channelName);
  }

  async connect(channelName: string = DEFAULT_CHANNEL_NAME) {
    await this.ably.connection.once("connected");
    console.log("Connected To Ably!");

    this.channelName = channelName;
    this.channel = this.ably.channels.get(this.channelName);
  }

  async subscribe(channelName: string = DEFAULT_CHANNEL_NAME) {
    if (!this.channel) {
      throw new Error("No Channel Subscribed");
    } else {
      return await this.channel.subscribe("greeting", (message) => {
        return message.data;
      });
    }
  }

  async publish() {
    if (!this.channel) {
      throw new Error("No Channel Subscribed");
    } else {
      await this.channel.publish("greeting", "hello!");
    }
  }

  async close() {
    this.ably.close(); // runs synchronously
    console.log("Closed the connection to Ably.");
  }
}

const tracker = new Tracker();
// tracker.connect();
// await tracker.close();

export default tracker;
