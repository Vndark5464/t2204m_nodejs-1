const user = require("../models/user");
const bcypt = 

exports.register = (req,res)=>{
    res.render("auth/register");
}

exports.create_user = async(req,res)=>{
    try{
        let existuser = await user.findOne({email:req.body.email});
        if(existuser) return res.status(422).send("Email is exist ...")
    }catch(error){
        res.send(error);
    }
}