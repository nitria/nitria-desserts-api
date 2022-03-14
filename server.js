const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("desserts.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.get("/desserts/title", (req, res) => {
  res.send("hello");
});
server.listen(port);
