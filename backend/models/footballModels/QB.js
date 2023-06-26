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

const QB = sequelize.define(
  "QB",
  {
    // Model attributes are defined here

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PassYds: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Tds: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    INT: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Rate: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    Cmp: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

QB.sync({ alter: true }); // Synchronizing the model with the database
module.exports = QB;
