const router = require("express").Router();
const bodyParser = require("body-parser");
const registerMidleware = require("../midleware/register");
const loginMidleware = require("../midleware/login");
const catalogMidleware = require("../midleware/catalog");
const indexMidleware = require("../midleware/index");
const checkAuthMidleware = require("../midleware/checkAuth");
const urlEncodedParser = bodyParser.urlencoded({extended: false});

router.get("/",indexMidleware);
router.get("/catalog",catalogMidleware);

router.get("/map",(req,res)=>
{
    res.render("map",{
        title:"Карта",
    });
});

router.get("/logout",(req,res)=>
{
    cookie = req.cookies;
    for (var prop in cookie) {
        if (!cookie.hasOwnProperty(prop)) {
            continue;
        }    
        res.cookie(prop, '', {expires: new Date(0)});
    }
    return res.redirect("/");
});

router.get("/login",checkAuthMidleware);

router.post("/register",urlEncodedParser,registerMidleware);

router.post("/login",urlEncodedParser,loginMidleware);

module.exports = router;