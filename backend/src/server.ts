import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import "./database";

const app = express();
app.use(bodyParser.json());

app.listen(8080, () =>
  console.log(
    "Express server has started. Open http://localhost:8080/ to see results"
  )
);
