const express = require("express");

 let app = express();
app.use(express.static(__dirname + "/public"))
 app.get("/",(req,res)=> {

    res.sendFile(__dirname + "/public/index.html")
 });

 app.listen(3000);
 console.log("puerto corriendo http://localhost:3000 ");


 