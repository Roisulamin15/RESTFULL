const jwt = require('jsonwebtoken');

module.exports = {
    checkLogin : (req,res) => {
        const bearer = req.header('acces-login');
        if(bearer === false){
            res.send({
                msg : 'cannot succes',
                status : 401,
                error : "you Must Be Login"
            })
        }else{
            const token = bearer.spilt("")[1];
            try{
                const decodeToken = jwt.verify(token,
                    "TEST2345")
                    req.decodeToken = decodeToken;
                    next();
            }
            catch(error){
                res.send({
                    msg : 'cannot acces',
                    status : 401,
                    error : 'You Must Be Login'

                })
            }
        }
    }
}