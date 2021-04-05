const user = require("../db/index.js");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const config = require("../config/config.json");
const secretKey = config.sessionConfig.secretKey;

module.exports = (req,res) =>
{
    const getAccesToken = function(id)
    {
        const payload  = {id};
        return jwt.sign(payload,secretKey,{expiresIn:"24h"});
    }
    user.user.findOne({where:{email:req.body.email},raw:true}).then(
        (users)=>
        {
            if (users!=null)
            {
                console.log("Почта совпадает");
                argon2.verify(users.password, req.body.password).then((argon2Match)=>
                {
                    if(argon2Match)
                    {
                        const token = getAccesToken(users.id);
                        res.send({
                           isError:false,
                           message:"Пользователь авторизован" 
                        });
                    }
                    else
                    {
                        res.send({
                            isError:true,
                            message:"Вы ввели неправильную почту или пароль."
                        });   
                    }
                }).catch(
                    (err)=>{
                        res.send("Ошибка сервера");
                    }
                );
            }
            else
            {
                res.send({
                    isError:true,
                    message:"Вы ввели неправильную почту или пароль."
                });
            }
        }
    );
}
