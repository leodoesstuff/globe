const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/flights", async (req, res) => {
  try {
    const response = await fetch("https://opensky-network.org/api/states/all");
    const data = await response.json();
    res.json(data);
  } catch {
    res.status(500).json({ error: "failed" });
  }
});

app.listen(3000);
