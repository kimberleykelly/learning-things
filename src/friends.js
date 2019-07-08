const express = require("express");
const app = express();
const port = 3000;

let friends = {
  "1": { name: "rachel", occupation: "designer" },
  "2": { name: "ross", occupation: "paleontologist" },
  "3": { name: "monica", occupation: "chef" },
  "4": { name: "joey", occupation: "actor" },
  "5": { name: "phoebe", occupation: "masseuse" },
  "6": { name: "chandler", occupation: "advertising" }
};

app.use(express.json());

//GET /api/friends/:id
app.get("/api/friends", (req, res, next) => {
  res.send(friends);
});

//PUT /api/friends/1?name=gunther&occupation=waiter
app.put("/api/friends/:id", (req, res, next) => {
  const friendUpdates = req.query;
  friends[req.params.id] = friendUpdates;
  res.send(friends[req.params.id]);
});

//POST /api/friends
app.post("/api/friends", (req, res, next) => {
  const { id, name, occupation } = req.body;
  friends[id] = { name, occupation };
  res.status(200).end(); // every request handler has to have .end() or .send()
});

//DELETE
app.delete("/api/friends/:id", (req, res, next) => {});

app.listen(port, () =>
  console.log(`Friends server listening on port ${port}!`)
);
