const routes = require("express").Router();
const { Router } = require("express");
//import get function from another file
const lesson1Controller = require("../controllers/lesson1");

// get function
// means "/" when at home page, send Emily Dumont
/*routes.get("/", (req, res) => {
  res.send("Emily Dumont");
});
*/

// Another get function
// means "/about" when at about, send Diana Pendragon
routes.get("/about", (req, res) => {
  res.send("Diana Pendragon");
});

// another get function but inported
routes.get("/", lesson1Controller.sarahRoute);
routes.get("/hannah", lesson1Controller.hannahRoute);

module.exports = routes;
