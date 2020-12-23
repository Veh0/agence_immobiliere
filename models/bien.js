'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bien.hasOne(models.Annonce);
      Bien.belongsToMany(models.Tag, {through: models.BienTag})
      Bien.hasMany(models.BienTag)
      Bien.belongsToMany(models.Caracteristique, {through: models.BienCaracteristique})
      Bien.hasMany(models.BienCaracteristique)
    }
  };
  Bien.init({
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    surface: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Bien',
  });
  return Bien;
};