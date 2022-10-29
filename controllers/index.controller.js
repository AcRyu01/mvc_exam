const db = require("../models/index");
const { employee, compensation } = db;
db.sequelize.sync();

const render = async (req, res) => {
  const allCompensation = await compensation.findAll();
  res.render("index", {
    compensation: allCompensation,
  });
};

module.exports = {
  render,
};
