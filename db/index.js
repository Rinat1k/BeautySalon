const Sequelize = require("sequelize");
const sequelize = new Sequelize("beauty_salon_db", "root", "root", {
    dialect: "mysql",
    host: "localhost"
  });
const User = require("../models/User.js")(sequelize);

module.exports = {
  sequelize: sequelize,
  user : User
}