const User = require("../models/User.js");
module.exports.register = (req,res) =>
{
    const user = new User(
        {
            name:req.body.name,
            surname:req.body.surName,
            birthday:req.body.birthday,
            gender:req.body.gender,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email,
            password:req.body.password
        }
    )
    user.save().then(console.log("Сохранён пользоователь")).then(console.log("Какая то ошибка"));
}