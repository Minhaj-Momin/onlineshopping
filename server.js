var express =require('express');
var app=express();

app.get("/", (req, res)=>{
    res.send(
        "<h1>Online Sopping</h1>"
        +"<hr/>"
        +"<h3>Smart Devices for sales</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptop</l1>"
        +"<li>Mobile Phones</li>"
        +"<li>Tabs</li>"
        +"</ol>"
    );
});
app.get("/login", (req, res)=>{
    res.send(
        "<h1>Online Sopping</h1>"
        +"<hr/>"
        +"<form>"
        +"<br/>"
        +"<input>"
        +"<br/>"
        +"<input/>"
        +"<br/>"
        +"<button>Longin</button>"
        +"</form>"
    );
});
app.get("/aboutus", (req, res)=>{
    res.send(
        "<h1>Online Sopping</h1>"
        +"<hr/>"
        +"<h3>This is online shpping app</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Director: vijay</li>"
        +"<li>for all electronics devices</l1>"
        +"</ol>"
    );
});
var server= app.listen(9000);
console.log("Online shopping app running on 9000 port");