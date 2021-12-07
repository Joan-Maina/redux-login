const jwt = require('jsonwebtoken')
const jwtGenerate = require('../helpers/jwtGenerate')
require("dotenv").config();

// const loginUser = require('../controllers/userController')

const checkToken = async(req, res, next) => {
    // console.log(req.headers.authori)
    //check token
    let token = req.headers.authorization;
    // console.log(token)
    if(!token){
        res.send('get a token!')
    }
    // if (token === 'undefined') return (
    //   res.send({message:'wait', 
    //   token: jwtGenerate({ email, password})})
    // );
    // try {
        // console.log(token)
      
          const data = jwt.verify(token, process.env.secretkey,(err, decoded)=>{

            if(err){
                res.send('error occurred!')
            }
            else{
            res.send('correct')
            }
          })
        //   console.log(data)
          req.user = data;
         
         
    //   } catch (error) {
    //       res.status(400).json({ message: "Invalid token" })
    //   }
    }

    module.exports = checkToken