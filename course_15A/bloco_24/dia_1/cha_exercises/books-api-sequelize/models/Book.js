const { DataTypes } = require("sequelize/types");

const Book = (sequelize, Datatypes) => {
  const User = sequelize.define("User", {
    id:Datatypes.INTEGER,
    title: Datatypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  });
};

module.exports = User;