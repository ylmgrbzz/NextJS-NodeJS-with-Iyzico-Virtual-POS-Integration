const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Iyzipay = require("iyzipay");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

const iyzipay = new Iyzipay({
  apiKey: process.env.API_KEY,
  secretKey: process.env.SECRET_KEY,
  uri: process.env.URI,
});
