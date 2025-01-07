import fetch from "node-fetch";
import express from "express";

const SYNAPSE_API = "https://synapse-api.replit.app";

// replace this by your Synapse Application credentials
const client_id = "test_app";
const client_secret = process.env.SYNAPSE_SECRET;

const app = express();
app.use(express.json());

// main route for Synapse authorization
app.get("/synapse/token", async (req, res) => {

  const url = `${SYNAPSE_API}/token?code=${req.query.code}`;
  let response = await fetch(url, {
    method: "GET",
    headers: {
       Authorization: `Basic ${client_id}:${client_secret}`
    }
  });

  // a JSON object is returned with token or error
  let data = await response.json();
  res.status(response.status).json(data);
});

// static files (html, css, ...) served from /public
app.use('/', express.static('public'));

app.listen(8080)