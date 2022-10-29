const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const engine = require("ejs-locals");
app.set("views", path.join(__dirname, "/views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");
const routes = require("./routes");
app.use("/", routes);

// app.use((_req, res) => {
//   res.sendStatus(501);
// });

app.listen(3000, () => {
  console.log("sever run on port " + 3000);
});
