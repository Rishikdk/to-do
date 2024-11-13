const express = require("express");

const app = express();
const PORT = 8000;
app.use(express.json()); 

app.listen(PORT, ()=>{
    console.log("running:" ,PORT);
})

let data=[];

app.get("/gettodo",(req,res)=>{
    res.json(data);
})        


app.post("/todo",(req,res)=>{
    const title = req.body.title;
    const newData= {
        id:data.length+1,
        title,
    };
    data.push(newData.title);
    res.status(201).json(newData);
});