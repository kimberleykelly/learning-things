const express = require("express");
const app = express();
const port = 3000;

app.get("/api/fruit/clicks", (req, res) =>
  res.send({ bananaClicks: 20, pineappleClicks: 55 })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
