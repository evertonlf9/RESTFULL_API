'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        type: Sequelize.STRING(40)
      },
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name:{
        type: Sequelize.STRING(200),
        allowNull: false
      },
      cpf:{
        type: Sequelize.STRING(11),
        allowNull: false
      },
      email:{
        type: Sequelize.STRING(150),
        allowNull: false
      },
      password:{
        type: Sequelize.STRING(30),
        allowNull: false
      },
      theme:{
        type: Sequelize.STRING(15),
        allowNull: false
      },
      locale:{
        type: Sequelize.STRING(10),
        allowNull: false
      },
      active:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};