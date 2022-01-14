/*eslint-disable*/
const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());
app.get("/api/getPharmacy", (req, res) => {
  axios
    .get("https://mnen-api.herokuapp.com/pharmacyLocations")
    .then((response) => {
      res.send(response.data);
    });
});
app.get("/api/getAtm", (req, res) => {
  axios.get("https://mnen-api.herokuapp.com/atmLocations").then((response) => {
    res.send(response.data);
  });
});
app.get("/api/getSupermarket", (req, res) => {
  axios
    .get("https://mnen-api.herokuapp.com/supermarketLocations")
    .then((response) => {
      res.send(response.data);
    });
});
app.get("/api/getCinema", (req, res) => {
  axios
    .get("https://mnen-api.herokuapp.com/cinemaLocations")
    .then((response) => {
      res.send(response.data);
    });
});

app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is running on: http://localhost:${port}`);
