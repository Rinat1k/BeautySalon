const router = require("express").Router();
const bodyParser = require("body-parser");
const registerMidleware = require("../midleware/register");
const loginMidleware = require("../midleware/login");
const catalogMidleware = require("../midleware/catalog");
const urlEncodedParser = bodyParser.urlencoded({extended: false});

router.get("/",(req,res)=>
{
    res.render("index",{
        title:"Главная страница"
    });
});
router.get("/catalog",catalogMidleware);
router.get("/map",(req,res)=>
{
    res.render("map",{
        title:"Карта",
    });
});
router.post("/register",urlEncodedParser,registerMidleware);

router.post("/login",urlEncodedParser,loginMidleware);

module.exports = router;