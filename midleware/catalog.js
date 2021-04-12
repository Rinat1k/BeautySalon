const salon = require("../db/index.js").salon;
module.exports = (req,res)=>
{
    salon.findAll().then(
        (salons)=>
        {
            console.log(salons);
            res.render("catalog",{
                title:"Каталог",
                salonData: salons 
            });
        }
    )
}
