const express = require("express");
const {uuid} = require("uuidv4");


const app = express();
const PORT = 8000;
app.use(express.json()); 

app.listen(PORT, ()=>{
    console.log("running:" ,PORT);
})

let data=[];

//display
app.get("/gettodo",(req,res)=>{
    res.json(data);
})        

// create 
app.post("/todo",(req,res)=>{
    const title = req.body;
    // users.push({ ...user, id: uuidv4() });
    data.push({
        title: title,
        id:uuid()
    } );
    res.status(201).json(data);
    console.log(data);
});

//update
app.get(`/todo/:id`, (req, res)=>{
const id = req.params;
res.send(data);
console.log(data);
})