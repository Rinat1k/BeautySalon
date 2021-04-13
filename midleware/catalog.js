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
    }
    
    
    if (req.query.filter1!="default"&&req.query.filter2!="default")
    {
        salon.findAll({
            where:{
                typeofSalon: req.query.filter1,
                occupation: req.query.filter2
            },
            raw: true
        }).then(
        (filtredData)=>
            {
                return res.send(filtredData);
            }
        );
    }
    if (req.query.filter1=="default"&&req.query.filter2!="default")
    {
        salon.findAll({
            where:{
                //typeofSalon: req.query.filter1,
                occupation: req.query.filter2
            },
            raw: true
        }).then(
        (filtredData)=>
            {
                return res.send(filtredData);
            }
        );
    }
    if (req.query.filter1!="default"&&req.query.filter2=="default")
    {
        salon.findAll({
            where:{
                typeofSalon: req.query.filter1,
                //occupation: req.query.filter2
            },
            raw: true
        }).then(
        (filtredData)=>
            {
                return res.send(filtredData);
            }
        );
    }
    if (req.query.filter1=="default"&&req.query.filter2=="default")
    {
        salon.findAll({
            where: true,
            raw: true
        }).then(
        (filtredData)=>
            {
                return res.send(filtredData);
            }
        );
    }
    
    
    salon.findAll().then(
        (salons)=>
        {
            return res.render("catalog",{
                title:"Каталог",
                salonData: salons
            });
        }
    )
}