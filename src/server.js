const express = require("express");
const app = express();
const port = 3000;

let bananaClicks = 20;
let pineappleClicks = 10;

app.use(express.static("."));
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
