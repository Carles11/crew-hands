import Express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser'
import Api from './api';
import DB from './api/config/mongoose';

const app = Express();
DB();

app.use(cors());
app.use(urlencoded({ extended: true }))
app.use(json())


app.use("/api", Api);

app.get("/", (req, res) => {
  res.send(req.body);
  console.log("get is working")
});
// app.get("/supplier-profile", (req, res) => {
//   res.send({ succes: "get is working" });
//   console.log("get is working")
// });
app.post("/", (req, res) => {
  res.send({ succes: "post is working" });
  console.log("post is working")
})

app.listen(9000, () => {
  console.log("Listening port 9000")
});
