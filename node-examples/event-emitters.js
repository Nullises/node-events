const EventEmitter = require("events");

const myEmitter = new EventEmitter();

setImmediate(() => {
  myEmitter.emit("FIRST_EVENT");
});

myEmitter.on("FIRST_EVENT", () => {
  console.log("suscribed to first event");
});
