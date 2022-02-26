import express from "express";
import next from "next";
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const character = [
  {
    name: "Castiel",
  },
  {
    name: "Dean",
  },
  {
    name: "Sam",
  },
  {
    name: "Mary",
  },
  {
    name: "Bobby",
  },
  {
    name: "Charlie",
  },
  {
    name: "Crowly",
  },
  {
    name: "Megg",
  },
  {
    name: "Megg",
  },
];

app.prepare().then(() => {
  const server = express();

  server.get("/server/character",(_, res) => {
    res.send(character)
  })

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});