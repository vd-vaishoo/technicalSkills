const express=require('express');
const mongoose=require('mongoose');
const Skills=require('./models/productModel')
const app = express();

app.use(express.json())


app.get('/technical-skills',async(req,res)=>{
    try{
        const skills=await Skills.find({});
        const skillNames=skills.map(eachskill=>eachskill.skill)
        res.status(200).json(skillNames);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
    
})
app.post('/technical-skills',async (req,res)=>{
    console.log(req.body);
    res.send(req.body)
    try{
        const skills= await Skills.create(req.body);
        res.status(200).json(skills)
    } catch (error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

console.log("hello");
mongoose.connect('mongodb+srv://vaishnavir:vaishnavi95@clustertask.hhfiltv.mongodb.net/technicalskills?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to mongodb')
    app.listen(3001,()=>console.log("Running on 3001"));
    })
.catch((error)=>console.log(error))
