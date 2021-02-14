module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define("person", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    giftee: {
      type: Sequelize.INTEGER
    },
    listed: {
      type: Sequelize.BOOLEAN
    }
  });

  return Person;
};