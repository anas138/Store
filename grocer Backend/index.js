const express=require('express');
const mongoose=require('mongoose');
const cors =require('cors')
const app=express();
mongoose.connect('mongodb+srv://anas:anas@cluster0.rhmhv.mongodb.net/grocerApp?retryWrites=true&w=majority',(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res,'db is connected');
    }
})


app.use(express.json());
app.use(cors());
app.listen('3001',()=>{
    console.log('connected')
})