const userModel = require("../model/user.model")
const { genSaltSync, hashSync, compareSync } = require("bcryptjs")
const jwt  = require("jsonwebtoken")

const signUp = async (req, res)=>{
    try{
        const body = req.body
        const salt = genSaltSync(10)
        console.log("salt:", salt)
        body.password = hashSync(body.password, salt)

        const userObj = new userModel({
            username: body.username,
            password: body.password
        })
        const result = await userObj.save()
        if(result){
            res.status(201).json({
                success: true,
                message: "User created successfully.."
            })
        }else{
            res.status(400).json({
                success: true,
                message: "Error in user creation"
            })
        }

    }catch(error){
        res.status(503).json({
            success: false,
            message: error.message
        })
    }
}

const login = async (req, res)=>{
    try{
        const body = req.body
        const result = await userModel.findOne({username: body.username})
        if(result){
            if(compareSync(body.password, result.password)){
                const token = jwt.sign({
                    username: result.username
                }, 'SECRET', { expiresIn: '1h'})

                res.status(200).json({
                    success: true,
                    message: "Login success",
                    token: token
                })
                
            }else{
                res.status(400).json({
                    success: false,
                    message: "Invalid password"
                })
            }
        }else{
            res.status(400).json({
                success: false,
                message: "Invalid username"
            })
        }

    }catch(error){
        res.status(503).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    signUp,
    login
}