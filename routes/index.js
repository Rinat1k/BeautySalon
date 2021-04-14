const router = require("express").Router();
const bodyParser = require("body-parser");
const registerMidleware = require("../midleware/register");
const loginMidleware = require("../midleware/login");
const catalogMidleware = require("../midleware/catalog");
const indexMidleware = require("../midleware/index");
const urlEncodedParser = bodyParser.urlencoded({extended: false});

router.get("/",indexMidleware);
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