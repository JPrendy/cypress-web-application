let express = require("express");
let app = express(); //executes all the express files whenever the variable app is called

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home.ejs");
});

//gives a port for express to listen to
app.listen(8080, function(){
    console.log("server has started");
});

//If this is not on the localhost
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("server has started");
// });