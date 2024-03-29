const post = require('../models/postModel');
const createPost = async(req,res)=>{


try {

  const post =  new post({

    title:req.body.title,
    date:req.body.date,
    image:req.file.filename
    });
    
const postData = await post.save();

res.status(200).send({success:true,msg:'Post Data',data:postData});

} catch (error) {
    res.status(400).send({ success:false,msg:error.message});
    
}
}

const getposts = async(req,res)=>{
    try {
const posts = await post.find({});
res.status(200).send({success:true,msg:'Posts Data',data:posts});


        
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
        
    }
}
module.exports ={
    createPost,
    getposts
}