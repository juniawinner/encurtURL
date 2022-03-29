import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.listen(3000, () =>
  console.log(
    "Express server has started. Open http://localhost:3000/ to see results"
  )
);
