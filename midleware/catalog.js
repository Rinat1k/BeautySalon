const salon = require("../db/index.js").salon;
module.exports = (req,res)=>
{
    var sortType = req.query.sort;
    
    var condition1 = req.query.filter1 != "default" ?  { typeofSalon: req.query.filter1 } : null;
    var condition2 = req.query.filter2 != "default" ?  { occupation: req.query.filter2 } : null;
    var searchCondition = req.query.search != "" ? { name: req.query.search } : null;

    salon.findAll({
        where: Object.assign({}, condition1 , condition2, searchCondition),
        raw: true
    }).then(
    (filtredData)=>
        {
            switch(sortType)
            {
                case "sortByRating":
                    {
                            salon.findAll({
                                where: Object.assign({}, condition1 , condition2, searchCondition),
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
                            where: Object.assign({}, condition1 , condition2, searchCondition),
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
                            where: Object.assign({}, condition1 , condition2, searchCondition),
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
                            where: Object.assign({}, condition1 , condition2, searchCondition),
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
                default: return res.send(filtredData);
            }
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