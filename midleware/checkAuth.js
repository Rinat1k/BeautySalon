const user = require("../db/index.js").user;
const jwt = require("jsonwebtoken");

module.exports = (req,res)=>
{
    let cookie = req.cookies;
    let payload = new Buffer(cookie['authToken'].split('.')[1],'base64').toString('ascii').split(":")[1].split(',')[0];
    user.findOne({
        where:{id:payload},raw:true
    }).then((data)=>
    {
        return res.send(data);
    });

}