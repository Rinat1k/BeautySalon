const config = require("../config/config.json");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.dbConfig.nameDb, config.dbConfig.login, config.dbConfig.password, 
  {
    dialect: config.dbConfig.dialect,
    host: config.dbConfig.host
  });
sequelize.sync().then(result => 
  {
    //console.log("подключение к бд успешно завершено...");
  })
  .catch(err => console.log(err));

const User = require("../models/User.js")(sequelize);
const Salon = require("../models/Salon.js")(sequelize);

module.exports = {
  sequelize: sequelize,
  user : User,
  salon: Salon,
}