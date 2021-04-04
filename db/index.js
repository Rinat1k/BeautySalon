const Sequelize = require("sequelize");
const sequelize = new Sequelize("beauty_salon_db", "root", "root", {
    dialect: "mysql",
    host: "localhost"
  });
sequelize.sync().then(result => 
  {
    //console.log("подключение к бд успешно завершено...");
  })
  .catch(err => console.log(err));

const User = require("../models/User.js")(sequelize);

module.exports = {
  sequelize: sequelize,
  user : User
}