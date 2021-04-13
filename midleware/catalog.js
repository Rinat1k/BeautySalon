const salon = require("../db/index.js").salon;
module.exports = (req,res)=>
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
                        return res.send(sortedData);
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
                        return res.send(sortedData);
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
                        return res.send(sortedData);
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
                        return res.send(sortedData);
                    }
                );
        }break;
    }
    
    var condition1 = req.query.filter1 != "default" ?  { typeofSalon: req.query.filter1 } : null;
    var condition2 = req.query.filter2 != "default" ?  { occupation: req.query.filter2 } : null;

    salon.findAll({
        where: Object.assign({}, condition1 , condition2),
        raw: true
    }).then(
    (filtredData)=>
        {
            return res.send(filtredData);
        }
    );

  
    salon.findAll().then(
        (salons)=>
        {
            return res.render("catalog",{
                title:"Каталог",
                salonData: salons
            });
        }
    );
}