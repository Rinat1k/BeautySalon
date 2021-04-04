const router = require("express").Router();
const bodyParser = require("body-parser");
const registerController = require("../controllers/register");
const loginController = require("../controllers/login");

const urlEncodedParser = bodyParser.urlencoded({extended: false});
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
router.post("/register",urlEncodedParser,registerController);

router.post("/login",urlEncodedParser,loginController);

module.exports = router;