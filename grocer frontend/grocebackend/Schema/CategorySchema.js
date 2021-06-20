const mongoose=require('mongoose');

const catSchema= new mongoose.Schema({
    name:{
        type:'string',
        
    }
})

module.exports=mongoose.model('category',catSchema);