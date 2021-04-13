const salon = require("../db/index.js").salon;
module.exports = (req,res)=>
{
    if (req.query.sort!=null)
    {
        sortType = req.query.sort;
        switch(sortType)
        {
            case "sortByRating":
                {
                    salon.findAll({
                        order: [
                            ['rating', 'ASC'],
                            ],
                    }).then(
                        (sortedData)=>
                        {
                            res.send(sortedData);
                        }
                    );
                }break;
            case "sortByName":
                {
                    salon.findAll({
                        order: [
                            ['name', 'ASC'],
                            ],
                    }).then(
                        (sortedData)=>
                        {
                            res.send(sortedData);
                        }
                    );
                }break;
            case "sortByRatingDesc":
                {
                    salon.findAll({
                        order: [
                            ['rating', 'DESC'],
                            ],
                    }).then(
                        (sortedData)=>
                        {
                            res.send(sortedData);
                        }
                    );
                }break;
            case "sortByNameDesc":
                {
                    salon.findAll({
                        order: [
                            ['name', 'DESC'],
                            ],
                    }).then(
                        (sortedData)=>
                        {
                            res.send(sortedData);
                        }
                    );
                }break;
        }
    }
    salon.findAll().then(
        (salons)=>
        {
            //console.log(salons);
            res.render("catalog",{
                title:"Каталог",
                salonData: salons 
            });
        }
    )
}
