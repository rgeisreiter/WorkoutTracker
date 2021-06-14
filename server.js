const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");
const viewRouter = require("./routes/view");

PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use(require(apiRouter));
app.use(require(viewRouter));

app.listen(PORT, () => {
  console.log(`listening on port
    ${PORT}`);
});
