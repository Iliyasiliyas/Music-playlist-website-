var express=require("express")
var bodyparser=require("body-parser")
var mongoose=require("mongoose")
const bodyParser = require("body-parser")

const app=express()

app.use(bodyParser.json())
app.use(express.static('login'))
app.use(bodyParser.urlencoded({
    extended:true
}))
    
mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
});

const notesSchema = {
    username: String,
    email: String,
    password: String
}

const users = mongoose.model("users", notesSchema);


var db=mongoose.connection;

db.on('error',()=>console.log('error in connecting to database'));
db.once('open',()=>console.log("connected to Database"));


app.post("/sign_up",(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var phno=req.body.phno;
    var password=req.body.password;

    var data = {
        "name":name,
        "email":email,
        "phno":phno,
        "password":password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully,Kindly login with your credentials!");
    });

    return res.redirect("front.html");
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('login.html');
}).listen(3000);

console.log("listening on PORT 3000")

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var us = "";
var p = "";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("users").find({}).toArray(function(err, result) {
    if(err){
        throw err;
    }
    console.log("Kindly login with your credentials!");

    app.post("/sign_in", function(req, res){
        let newNote1 = new users({
            email: req.body.email,
            password: req.body.password
    
        });
        //newNote.save();
        console.log("Login user: "+newNote1);
        console.log("Results loop: ")
        var count = 0;
        for (let i =0; i<result.length; i++){
            console.log(result[i])
            
            if (newNote1.username == result[i].username && newNote1.password == result[i].password){
                console.log('Login Successful')
                res.redirect('login.html');
            }
            else{
                
                console.log("Invalid");
                count+=1;
            }
            if(count==result.length){
             res.redirect('/');   
            }
        }         


    });
})

})