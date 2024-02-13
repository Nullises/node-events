const http = require("http");

const requestListener = (req, res) => {
  res.write("Hello World");
  res.end();
};

const server = http.createServer();

server.on("request", requestListener);

server.listen(3000, () => {
  console.log("Server is running...");
});
