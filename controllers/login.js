const user = require("../db/index.js");
module.exports = (req,res) =>
{
    user.user.findAll({where:{email: req.body.email,password:req.body.password}, raw: true })
    .then(users=>{
        if (users.length>0)
        {
            res.send({
                isError:false,
                message:"Авторизация прошла успешно!"
            });
        }
        else
        {
            res.send({
                isError:true,
                message:"Вы ввели неправильную почту или пароль."
            });
        }     
    });
}