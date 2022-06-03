const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdDate: DataTypes.DATE,
  }, {
    tableName: "Biblioteca",
    timestamps: false,
  });
  
  return Book;
};

module.exports = Book;