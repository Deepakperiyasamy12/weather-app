const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express(); // This line initializes 'app'
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Your route and other code...
app.get("/weather", async (req, res) => {
  const { city } = req.query;
  const API_KEY = process.env.API_KEY;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
