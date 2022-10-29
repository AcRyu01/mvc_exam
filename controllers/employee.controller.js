const db = require("../models/index");
const { employee } = db;
db.sequelize.sync();

const get = async (req, res) => {
  const info = await employee.findAll();
  res.json(info);
};

const post = async (req, res) => {
  const data = req.body;
  const info = await employee.create({
    eid: data.eid,
    role: data.role,
    salary: data.salary,
    startDate: data.startDate,
  });
  if (!info) {
    res.sendStatus(500);
  } else {
    res.status(200).json(info);
  }
};
module.exports = {
  get,
  post,
};
