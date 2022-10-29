module.exports = (sequelize, Sequelize) => {
  const employee = sequelize.define(
    "employee",
    {
      eid: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        field: "eid",
      },
      role: { type: Sequelize.STRING(50), allowNull: false, field: "role" },
      salary: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "salary",
      },
      startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: "startDate",
      },
    },
    {
      tableName: "employee",
    }
  );

  return employee;
};
