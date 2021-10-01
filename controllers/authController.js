const User= require('../models/user')
const bcrypt = require('bcrypt')

module.exports.signup_get=(req,res)=>{

}

module.exports.login_get=(req,res)=>{
    
}

module.exports.signup_post = async (req, res) => {
    
    const { username} = req.body;
    const salt = await bcrypt.genSalt()
    const hashedPass= await bcrypt.hash(req.body.password,salt)
    password=hashedPass;
  
    try {
      const user = await User.create({ username, password });
      res.status(201).json(user);
    }
    catch(err) {
      console.log(err);
      res.status(400).send('error, user not created');
    }
   
  }

module.exports.login_post=async (req,res)=>{
    try{
        const {username,password} = req.body;

        const user = await User.findOne({username})
        !user &&  res.status(400).json("wrong credentials")

        const validated = await bcrypt.compare(password,  user.password)
        !validated && res.status(400).json("wrong credentials")

        res.status(200).json(user)

    }
    catch(err){
        console.log(err)
        res.status(400).send('error')
    }
    
}

module.exports.logout_get=(req,res)=>{
    
}