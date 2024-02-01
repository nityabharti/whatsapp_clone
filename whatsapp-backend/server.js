//BACKEND express.js PORT NUMBER: 9000

// importing

import express from "express";
import mongoose from "mongoose";

// app config
const app = express();
const port = process.env.PORT || 9000;

//midddleware

//db configure
const connection_url =
  "mongodb+srv://bhartinitya79:<password>@cluster0.euh98qu.mongodb.net/?retryWrites=true&w=majority";
// "mongodb+srv://<username>:<password>@cluster0.8xikvvx.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//npm install mongodb
//mongodb+srv://<username>:<password>@cluster0.8xikvvx.mongodb.net/?retryWrites=true&w=majority

//????

//api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

//listen

app.listen(port, () => console.log(`Listening on localhost: ${port}`));
