const router = require("express").Router();

router.get("/",(req,res)=>
{
    res.render("index",{
        title:"Главная страница"
    });
});
router.get("/catalog",(req,res)=>
{
    res.render("catalog",{
        title:"Каталог"
    });
});
router.get("/map",(req,res)=>
{
    res.render("map",{
        title:"Карта"
    });
});

module.exports = router;