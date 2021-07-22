//,jshint esversion:6
require("dotenv").config();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const express= require("express");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
//const md5 = require("md5");
const app = express();
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});

const userSchema = new mongoose.Schema({
    email : String,
    password : String
});

// const secret = ;
// userSchema.plugin(encrypt,{secret:secret,encryptedFields:["password"]});---encryption

const User = new mongoose.model("User",userSchema);

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {
   res.render("home.ejs"); 
});

app.get("/login",function (req,res) {
    res.render("login.ejs"); 
 });

 app.get("/register",function (req,res) {
    res.render("register.ejs"); 
 }); 

 app.post("/register",function(req,res){
    // bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    //     const newUser = new User({
    //         email : req.body.username,
    //        //password :md5(req.body.password)---md5
    //        password: hash
    //     });
    //     newUser.save(function (err) {
    //        if(err){
    //            console.log(err);
    //        } else
    //        {
    //            res.render("secrets.ejs")
    //        }
    //     });
    // });
  
 });

 app.post("/login",function(req,res){
    //  const username = req.body.username;
    //  //const password= md5(req.body.password);---md5
    //  const password= req.body.password;

    //  User.findOne({email:username},function(err,foundUser){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         if(foundUser){
    //             //if(foundUser.password=== password){---md5
    //             bcrypt.compare(password, foundUser.password, function(err, result) {
    //                if(result===true) 
    //                {
    //                 res.render("secrets.ejs");
    //                }
    //             });    
    //         }
    //     }
    //  })
 });











app.listen(3000,function () {
    console.log("server started successfully");
})