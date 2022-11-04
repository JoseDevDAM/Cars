module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define("car", {
    marca: {
      type: Sequelize.STRING
    },
    modelo: {
      type: Sequelize.STRING
    }
  });

  return Car;
}