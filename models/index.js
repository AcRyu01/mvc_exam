const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("employee", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require("./employee.model")(sequelize, Sequelize);
db.compensation = require("./compensation.model")(sequelize, Sequelize);

module.exports = db;
