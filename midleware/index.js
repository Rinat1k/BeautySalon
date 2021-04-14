const salon = require("../db/index.js").salon;
module.exports = (req,res)=>
{
    salon.findAll({
        order: [
            ['rating', 'DESC'],
            ],
    }).then(
        (sortedData)=>
        {
            return res.render("index",{
                title:"Главная страница",
                salonData: sortedData
            });
        }
    );
}