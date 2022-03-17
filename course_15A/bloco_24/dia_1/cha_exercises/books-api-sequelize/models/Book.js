const { DataTypes } = require("sequelize/types");

const Book = (sequelize, Datatypes) => {
  const Book = sequelize.define("Book", {
    id:Datatypes.INTEGER,
    title: Datatypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  });
  
  return Book;
};

module.exports = Book;