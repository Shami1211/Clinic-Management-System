//Auth middleware to intercept requests and authenticate using roles.

// const jwt = require('jsonwebtoken')
// const asyncHandler = require('express-async-handler')
// const User = require('../models/userModel')

// const protect = (role)=> asyncHandler( async(req,res,next)=>{
//     let token

//     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
//         try {
//             //Get token from header
//             token = req.headers.authorization.split(' ')[1]

//             // Verify Token
//             const decoded = jwt.verify(token, process.env.JWT_SECRET)

//             //Get user from the token
//             req.user = await User.findById(decoded.id).select('-password')

//             //Check user's role
//             console.log(req.user.role)
//             if(req.user.role != role){
//                 res.status(403)
//                 throw new Error('Access Denied')
//             }

//             next()
//         } catch (error) {
//             console.log(error)

//             res.status(401)
//             throw new Error('Not Authorized')
//         }

//     }

//     if(!token){
//         res.status(401)
//         throw new Error('Not Authorized, No Token')
//     }
// })

// module.exports  = protect