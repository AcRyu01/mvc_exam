const db = require("../models/index");
const { compensation } = db;
db.sequelize.sync();

const get = async (req, res) => {
  const info = await compensation.findAll();
  res.json(info);
};

const put = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const info = await compensation.update(
    {
      id: data.id,
      amount: data.amount,
      count: data.count,
    },
    {
      where: { id: id },
    }
  );
  if (!info) {
    res.sendStatus(500);
  } else {
    res.sendStatus(200);
  }
};

module.exports = {
  get,
  put,
};
