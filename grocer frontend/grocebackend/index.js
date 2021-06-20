const express= require ('express');
const mongoose=require('mongoose');
const cors=require('cors');
const Route=require('./Routes/route.js')
const app=express();

app.use(express.json());
app.use(cors());
app.use(Route);


mongoose.connect('mongodb+srv://anas:anas@cluster0.rhmhv.mongodb.net/grocerApp?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },

(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res,'db is connected');
    }
})




app.listen('3001',()=>{
    console.log('connected')
})