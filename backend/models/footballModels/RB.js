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

const RB = sequelize.define(
  "RB",
  {
    // Model attributes are defined here

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RushYds: {
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
    RushTds: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Rec: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

RB.sync({ alter: true }); // Synchronizing the model with the database
module.exports = RB;
