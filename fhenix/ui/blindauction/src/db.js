const { Level } = require("level");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const db = new Level("records", { valueEncoding: "json" });

async function initREST() {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.post("/set", async (req, res, _next) => {
    db.put(req.body.name, req.body);
    res.json({ result: "success" });
  });

  app.get("/get-my", async (req, res, _next) => {
    const owner = req.query.owner;
    let result = new Array();
    for await (const [_, value] of db.iterator()) {
      if (value.owner === owner) {
        result.put(value);
      }
    }
    res.json({ result: "success", output: JSON.stringify(result) });
  });

  app.get("/get-their", async (req, res, _next) => {
    const owner = req.query.owner;
    let result = new Array();
    for await (const [_, value] of db.iterator()) {
      if (value.owner !== owner) {
        result.put(value);
      }
    }
    res.json({ result: "success", output: JSON.stringify(result) });
  });

  app.listen(1337, () => {
    console.log(`Server running on port 1337`);
  });
}

async function main() {
  initREST();
}

main();
