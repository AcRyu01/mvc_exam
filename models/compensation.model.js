module.exports = (sequelize, Sequelize) => {
  const compensation = sequelize.define(
    "compensation",
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      amount: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "amount",
      },
      count: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "count",
      },
    },
    {
      tableName: "compensation",
    }
  );

  return compensation;
};
