const express = require('express');
const app = express();
const port=5000;
var cors = require('cors')


app.use(cors())

const users = [
    {id:1,name:"doggo",mail:"doggo@elon.com"},
    {id:2,name:"catto",mail:"catto@rafi.com"},
    {id:3,name:"meta",mail:"meta@joke.com"},
    {id:4,name:"mirjafar",mail:"jafar@betray.com"}
]

app.get("/",(req,res)=>{
    res .send(users)
})

app.get("/mew",(req,res)=>{
    res .send(users)
})

app.get("/user/:id",(req,res)=>{
    console.log(req.params)
    const id = req.params.id
    const user = users.find(us => us.id == id)
    res .send(user)
})

app.listen(port,()=>{
    console.log("mewmewm")
})


app.post('/postUser',(req,res)=>{
    console.log(req);
    res.send("post method success");
})