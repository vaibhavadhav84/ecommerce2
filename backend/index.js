const express = require('express');

const app = express();

app.get("/",(req,resp)=>{
    resp.send("Welcome to my first express app")
});


app.listen(5000);