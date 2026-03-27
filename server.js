const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

// ✅ ROOT (fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// ✅ FLIGHTS ENDPOINT (THIS IS THE IMPORTANT ONE)
app.get("/flights", async (req, res) => {
  try {
    const response = await fetch("https://opensky-network.org/api/states/all");
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch flights" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
