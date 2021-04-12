const salon = require("../db/index.js").salon;
module.exports = (req,res)=>
{
    salon.findAll().then(
        (salons)=>
        {
            res.render("catalog",{
                title:"Каталог",
                salonData: salons 
            });
        }
    )
}
