const user = require("../db/index.js");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const config = require("../config/config.json");
const session = require("express-session");
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
                //console.log("Почта совпадает");
                argon2.verify(users.password, req.body.password).then((argon2Match)=>
                {
                    if(argon2Match)
                    {
                        const token = getAccesToken(users.id);
                        return res.send({
                           isError:false,
                           message:"Пользователь авторизован",
                           token:`Bearer ${token}`
                        });
                        console.log(`Сгенерирован токен: ${token}`);
                    }
                    else
                    {
                        return res.send({
                            isError:true,
                            message:"Вы ввели неправильную почту или пароль."
                        });   
                    }
                }).catch(
                    (err)=>{
                        return res.send("Ошибка сервера");
                    }
                );
            }
            else
            {
                return res.send({
                    isError:true,
                    message:"Вы ввели неправильную почту или пароль."
                });
            }
        }
    );
}
