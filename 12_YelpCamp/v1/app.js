var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

var campgrounds=[
    {name:"Yellow Tent", image:"https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144392f0c87fa3ecb6_340.jpg"},
    {name:"Mountain", image:"https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f7c170a1e9b4bb_340.jpg"},
    {name:"Stars", image:"https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f7c170a1e9b4bb_340.jpg"},
    {name:"Yellow Tent", image:"https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144392f0c87fa3ecb6_340.jpg"},
    {name:"Mountain", image:"https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f7c170a1e9b4bb_340.jpg"},
    {name:"Stars", image:"https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f7c170a1e9b4bb_340.jpg"},
    {name:"Yellow Tent", image:"https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144392f0c87fa3ecb6_340.jpg"},
    {name:"Mountain", image:"https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f7c170a1e9b4bb_340.jpg"},
    {name:"Stars", image:"https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f7c170a1e9b4bb_340.jpg"}

];

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res){

    //GET DATA
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name: name, image: image};
    campgrounds.push(newCamp);

    //REDIRECT
    res.redirect("/campgrounds");

});

app.get("/campgrounds/new",function(req,res){
    res.render("new");
});

app.listen(3000,function(){
    console.log("Server Started");
});