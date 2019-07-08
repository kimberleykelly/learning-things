const express = require("express");
const app = express();
const port = 3000;

let bananaClicks = 100;
let pineappleClicks = 200;

app.use(express.json());

app.get("/api/fruit/clicks", (req, res) => {
  res.send({ bananaClicks, pineappleClicks });
});

app.post("/api/fruit/clicks", (req, res) => {
  bananaClicks = req.body.bananaClicks;
  pineappleClicks = req.body.pineappleClicks;
  res.status(200).end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
