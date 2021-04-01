const express = require("express");
const exprhbs = require("express-handlebars");
const path = require("path");
const routes = require("./routes/index");


const PORT = process.env.PORT || 3000;
const app = express();
const hbs = exprhbs.create(
    {
        layoutsDir:"views/layouts",
        defaultLayout:"layout",
        extname:"hbs"
    }
);
//hbs.registerPartials(__dirname + "/views/partials");

app.engine("hbs",hbs.engine);

app.set("view engine","hbs");
app.set("views","views");

app.use(express.static(path.join(__dirname,"public")));
app.use("/",routes); 

app.listen(PORT, ()=>
{
    console.log(path.join(__dirname,"public"));
    console.log("Сервер запущен...");
});
