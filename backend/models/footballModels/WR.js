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

const WR = sequelize.define(
  "WR",
  {
    // Model attributes are defined here

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Rec: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Yds: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    TD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Lng: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

WR.sync({ alter: true }); // Synchronizing the model with the database
module.exports = WR;
