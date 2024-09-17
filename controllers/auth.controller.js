const { verify } = require("jsonwebtoken")

const verifyToken = async (req, res, next)=>{
    try{
        console.log(req.headers.authorization)
        const bearerToken = req.headers.authorization.split(" ")[1]
        if(verify(bearerToken, 'SECRET')){
            next()
        }else{
            res.status(400).json({
                success: false,
                message: "Invalid token 2"
            })    
        }      

    }catch(error){
        res.status(400).json({
            success: false,
            message: "Invalid token"
        })
    }
}

module.exports = {
    verifyToken
}