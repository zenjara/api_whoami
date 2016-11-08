var express= require("express");
var app= express();
var UAParser = require('ua-parser-js');
var parser = new UAParser();

app.set("view engine","ejs");
app.get("/whoami",function(req,res) {
    var info ={
        ipAddress: req.headers["x-forwarded-for"],
        language: req.headers["accept-language"].split(",")[0],
        software: parser.setUA(req.headers["user-agent"]).getResult()["os"]
    };
   
    //res.render("whoami",{info:info});
    res.send(info);
    
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server started");
});