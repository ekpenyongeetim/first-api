const emilyRoute = (req, res) => {
  res.send("Emily birch");
};

const hannahRoute = (req, res) => {
  res.send("Hannah birch");
};

const sarahRoute = (req, res) => {
  res.send("Sarah birch - home");
};

module.exports = {
  sarahRoute,
  emilyRoute,
  hannahRoute,
};
