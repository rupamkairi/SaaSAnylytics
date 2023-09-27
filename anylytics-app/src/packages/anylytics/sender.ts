import { default as connector } from "./connector";

export default function sendPageClicks(event: MouseEvent) {
  if (!document || !window) return;
  const element = event.target as any;

  const data = {
    type: "click",
    window: {
      outerWidth,
      outerHeight,
      innerWidth,
      innerHeight,
    },
    document: {
      outerWidth,
      outerHeight,
      innerWidth,
      innerHeight,
    },
    page: {
      pageX: event.pageX,
      pageY: event.pageY,
      clientX: event.clientX,
      clientY: event.clientY,
      offsetX: event.offsetX,
      offsetY: event.offsetY,
    },
    event: {},
    element: {
      tag: element.tagName,
      text: element.textContent,
      src: element.src,
    },
  };

  connector.ws.send(JSON.stringify(data));
}
