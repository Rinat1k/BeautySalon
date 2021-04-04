const user = require("../db/index.js");
module.exports = (req,res) =>
{
    user.user.findAll({where:{email: req.body.email}, raw: true })
    .then(users=>{
        if (users.length>0)
        {
            res.send({
                isError:true,
                message:"Ошибка. Пользователь с такой почтой уже существует."
            });
        }
        else
        {
            user.user.create({
                name:req.body.name,
                surname:req.body.surName,
                birthday:req.body.birthday,
                gender:req.body.gender,
                phoneNumber:req.body.phoneNumber,
                email:req.body.email,
                password:req.body.password
            });
            res.send({
                isError:false,
                message:"Поздравляем! Вы были успешно зарегистрированы!"
            });
        }     
    });
}