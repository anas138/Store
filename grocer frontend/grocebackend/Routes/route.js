const express=require('express')
const app=express();
const CategorySchema=require('../Schema/CategorySchema.js')

app.post('/category',async(req,res)=>{
    const data={
        name:req.body.name,
    }
    const catSchema= await new CategorySchema(data,(error,db)=>{
        if(error){
            console.log(error)
        }else{
            console.log('db id connected')
        }
    })
    await catSchema.save();
    res.send(catSchema);
    console.log('data is saved');
    
})

app.get("/category",async(req,res)=>{
    const data=await CategorySchema.find();
    res.send(data);
    
})
module.exports=('route',app);