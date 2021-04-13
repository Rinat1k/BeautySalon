const user = require("../db/index.js");
const argon2 = require("argon2");
module.exports = (req,res) =>
{
    user.user.findAll({where:{email: req.body.email}, raw: true })
    .then(users=>{
        if (users.length>0)
        {
            return res.send({
                isError:true,
                message:"Ошибка. Пользователь с такой почтой уже существует."
            });
        }
        else
        {
            let birthdayData = req.body.birthday.split(".")[2]+"-"+req.body.birthday.split(".")[1]+"-"+req.body.birthday.split(".")[0];
            argon2.hash(req.body.password).then((hashPassword)=>
            {
                user.user.create({
                    name:req.body.name,
                    surname:req.body.surName,
                    birthday:birthdayData,
                    gender:req.body.gender,
                    phoneNumber:req.body.phoneNumber,
                    email:req.body.email,
                    password:hashPassword
                });
            });
            return res.send({
                isError:false,
                message:"Поздравляем! Вы были успешно зарегистрированы!",  
            });
        }     
    });
}