const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const app = express();
const productSchema = require("./models/Product");
const userSchema = require("./models/User");

require('dotenv').config();

var url = process.env.MONGODB

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => {
        console.log("csatlakoztunk")
    })
    .catch((err) => {
        console.log(err)
    })

const product = mongoose.model('Product', productSchema);
const user = mongoose.model('User', userSchema);


//const tmp = new product({name: "körte", description: "pü", itemid: "1" , quantity: "5", price: "1" , img_name: "assets/img/körte.png"})

//tmp.save() 

//const tmp = new user({name: "szaboz", password: "PRF2021"});
//tmp.save() ;

app.use(express.static("frontend/shop/dist/shop/", { root: __dirname }))

app.get('/', (req, res) => {
    res.sendFile("frontend/shop/dist/shop/index.html", { root: __dirname })
})

app.post('/products', (req, res) => {
    product.find({
        "quantity": { $gt: 0}
    }), (err, result) => {
        console.log(result)
        res.send(result)
    }
})

app.listen(process.env.PORT);