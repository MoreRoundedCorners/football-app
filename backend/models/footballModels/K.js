const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  "web-scraping-data",
  "root",
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const K = sequelize.define(
  "K",
  {
    // Model attributes are defined here

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FGM: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Att: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Lng: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FGPercent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

K.sync({ alter: true }); // Synchronizing the model with the database
module.exports = K;
