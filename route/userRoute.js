const {Router} = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")
const Users = require("../schema/user")
const config = require("config")

class UserRoute{
     async loginAccount(req,res){
         try{
             const {email,password} = req.body;
             //if validation ressult is not valid send response with array of bug`s
             const errors = UserRoute.validation(req);
             if(errors.length>0){return res.status(400).json({
                     message:'incorrect data please try again',
                     errors: errors})
             }
             //else try to find user in DB,
             // if not exist or password wrong - send message with mistake
             let candidate = await Users.findOne({email})
             if(!candidate){return res.status(400).json({message:"wrong email or user not exist"})}
             //if user exist compare password with hashed
             let passwordCompareError =await bcrypt.compare(password,candidate.password)
             if(!passwordCompareError){return res.status(400).json({message: 'Wrong password'})}
             const token = jwt.sign({userID: candidate.id},config.get('jwt'),{ expiresIn: '12h' })
             return res.status(200).json({id:candidate.id, jwt:token})
         }
         catch (e) {
             console.log(e.message)
             return res.status(500).json({message:'server side error'})}
         }
     async createAccount(req,res){
               try{
             const {email,password,data} = req.body;
             //if validation ressult is not valid send response with array of bug`s
             const errors = UserRoute.validation(req);
             if(errors.length>0){return res.status(400).json({
                     message:'incorrect data please try again',
                     errors: errors})
             }
             //else try to find user in DB,
             // if not exist or password wrong - send message with mistake
             const candidat =await Users.findOne({email});
             if(candidat){
                 console.log(candidat)
                 return res.status(400).json({
                 message:'user allready exist',
                 errors:['user allready exist']
                 })
             }

             let hashPassword = await bcrypt.hash(password,12)
             const user = new Users({ email,password: hashPassword,userData:data  })
                   await user.save();
             return res.status(201).json({
                       message:'new user sacsessfully created'})
         }
         catch (e) {
             console.log(e.message)
             return res.status(500).json({message:'server side error'})}
         }
    static validation=(req)=>{
        const {email,password} = req.body;
        let results = [];
        let schema={
            email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            password: /(?=.*[0-9]){6,}/g
        }
        if(!schema.email.test(email)){results.push("email not correct")}
        if(!schema.password.test(password)){results.push("password not correct")}
        return results;
    }
}

const userRoute = new UserRoute()
router.post("/login", userRoute.loginAccount)
router.post("/registration",userRoute.createAccount)
module.exports = router;