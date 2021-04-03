const Sequelize = require("sequelize");

module.exports = function(sequelize)
{
    return sequelize.define('user',
    {
        id:
        {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        name:
        {
            type: Sequelize.STRING,
            allowNull:false
        },
        surname:
        {
            type: Sequelize.STRING,
            allowNull:false
        },
        birthday:
        {
            type:Sequelize.DATE,
            allowNull:false
        },
        gender:
        {
            type:Sequelize.STRING,
            allowNull:false
        },
        phoneNumber:
        {
            type:Sequelize.STRING,
            allowNull:false
        },
        rating:
        {
            type:Sequelize.INTEGER,
            allowNull:true
        },
        email:
        {
            type:Sequelize.STRING,
            allowNull:true
        },
        password:
        {
            type:Sequelize.STRING,
            allowNull:false
        } 
    },
    {
        timestamps:false,
        tableName:"user",
    });
}