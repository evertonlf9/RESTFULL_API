'use strict';
const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf:{
      type: DataTypes.DECIMAL(11,0),
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    theme:{
      type: DataTypes.STRING,
      allowNull: false
    },
    locale:{
      type: DataTypes.STRING,
      allowNull: false
    },
    active:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    tableName: 'Users',
    paranoid: true
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

export default User;