const Sequelize = require("sequelize");

module.exports = function(sequelize)
{
    return sequelize.define('salon',
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
        address:
        {
            type: Sequelize.STRING,
            allowNull:false
        },
        link:
        {
            type:Sequelize.STRING,
            allowNull:false,
            defaultValue:"Без ссылки"
        },
        fromTime:
        {
            type:Sequelize.DATE,
            allowNull:false
        },
        tillTime:
        {
            type:Sequelize.DATE,
            allowNull:false
        },
        occupation:
        {
            type:Sequelize.ENUM,
            values: ['Род деятельности 1', 'Род деятельности 2', 'Род деятельности 3']
        },
        rating:
        {
            type:Sequelize.FLOAT,
            allowNull:true,
            defaultValue: 0
        },
        photoLink:
        {
            type:Sequelize.STRING,
            allowNull:false
        } 
    },
    {
        timestamps:false,
        tableName:"salon",
    });
}