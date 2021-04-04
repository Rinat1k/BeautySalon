const express = require("express");
const exprhbs = require("express-handlebars");
const path = require("path");
const routes = require("./routes/index");
const config = require("./config/config.json");
const PORT = process.env.PORT || config.serverConfig.PORT; //номер порта
const app = express();
const hbs = exprhbs.create(
    {
        layoutsDir: config.hbsConfig.layoutsDir,
        defaultLayout:config.hbsConfig.defaultLayout,
        extname:config.hbsConfig.extname
    }
);
const db = require("./db");
const User = db.user;

app.engine("hbs",hbs.engine);

app.set("view engine",config.hbsConfig.extname);
app.set("views","views");

app.use(express.static(path.join(__dirname,"public")));
app.use("/",routes); 

app.listen(PORT, ()=>
{
    console.log("Сервер запущен...");
});
