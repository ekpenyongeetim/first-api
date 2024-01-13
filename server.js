const express = require("express"); // import the node package

// use the node package imported which is express
const app = express();
// get function
// means "/" when at home page, send Hello
app.get("/", (req, res) => {
  res.send("Emily Dumont");
});
// listen function
// will be listening at port 3000
const port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || 3000));
});
