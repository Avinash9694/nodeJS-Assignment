var express= require("express");
var app = express()
 
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", "./views");
app.set("view engine", "ejs");
var user = [];

user.push({name:"Avinash Sahu",
    email:"avinashsahu1994@gmail.com"
})

app.get("/", (req,res)=>{
    res.render("index.ejs",{user})
})

app.get("/form",(req,res)=>{
    res.render("form.ejs",{user})
})
app.post("/user/add",(req,res)=>{
    user.push({email: req.body.email,
        name: req.body.name
    })
    res.redirect("/") ;   
}
)
app.listen(3000,()=>console.log("server is responding"))