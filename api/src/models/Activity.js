const { sequelize, DataTypes, UUID } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Activity", {
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.TEXT,
    },
    Dificultad: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
    },
    Duracion: {
      type: DataTypes.INTEGER,
    },
    Temporada: {
      type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
    },
  },{
    timestamps: false
  });
};
