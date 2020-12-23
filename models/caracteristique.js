'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caracteristique extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Caracteristique.belongsToMany(models.Bien, {through: models.BienCaracteristique})
      Caracteristique.hasMany(models.BienCaracteristique)
    }
  };
  Caracteristique.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Caracteristique',
  });
  return Caracteristique;
};