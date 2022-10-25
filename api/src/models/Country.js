const { sequelize, DataTypes, UUID } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// const sequelize = new sequelize("postgres://diego:CubillosOrtiz1@localhost:5432/countries");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true
    },
    Nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Imagen_de_la_Bandera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Subregion: {
      type: DataTypes.STRING,
    },
    Area: {
      type: DataTypes.STRING,
    },
    Poblacion: {
      type: DataTypes.STRING,
    },
  },{
    timestamps: false
  });
};