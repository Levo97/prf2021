const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.send("Szia Levi")
})

app.listen(3000);