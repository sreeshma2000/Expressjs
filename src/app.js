const express=require("express");
const app=express();
app.use(express.json());
// app.get("/",(req,res)=>{res.send("ok");})
// app.post("/",(req,res)=>{res.send(req.body);})
const AuthRoute=require("./routes/auth.js")
app.use("/",AuthRoute);


app.listen(8000,()=>{
    console.log("server listening at 8000");
})
