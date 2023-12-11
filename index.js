require('dotenv').config()

const express=require('express');
const app=express();

const port=4000;


app.get('/',(req,res)=>{
    res.send("hello world!")
})
app.get('/twiter',(req,res)=>{
    res.send('<a></a>')
})
app.get('/login',(req,res)=>{
    res.send("you have to login ")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening at the port ${port}`)
})
