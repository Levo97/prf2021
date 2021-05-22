const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const app = express();
const productSchema = require("./models/Product");
const userSchema = require("./models/User");
const bodyParser = require('body-parser');
var http = require('http');

var cors= require('cors')

app.use(cors())

require('dotenv').config();
var session = require('express-session')

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

app.use(session({
  secret: 'titkos kulcs',
  resave: false,
  saveUninitialized: true
}))

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


passport.use(new LocalStrategy({

    usernameField:'name',
    passwordField:'password'
},
    function(name, password, done) {
      User.findOne({ name: name }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        
        user.comparePasswords(password, (err, isMatch) => {
            if (err) return done(err, false);
            if(!isMatch) return done("Incorresct password", false);
            return done(null, user);
        })
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  app.post('/login', (req, res) => {
    if(req.body.name) {
        passport.authenticate('local', (err, user) => {
            if (err) return res.status(500).send(err);
            req.login(user, (err) => {
                if (err) return res.status(500).send(err)
               return res.status(200).send("Authenticated!")
            })
        })(req,res);

    } else {
       return  res.status(400).send("Bad request")
    }
  } );

  app.post('/logout', (req, res, next) => {
    if (req.isAuthenticated()) {
      req.logout();
      return res.status(200).send('Kijelentkezes sikeres');
    } else {
      return res.status(403).send('Nem volt bejelentkezve');
    }
  })
  

app.use(express.static("frontend/shop/dist/shop/", { root: __dirname }))

app.get('/', (req, res) => {
    res.sendFile("frontend/shop/dist/shop/index.html", { root: __dirname })
})

app.post('/products', (req, res) => {
    product.find({
        "quantity": { $gt: 0}
    }), (err, result) => {

          if (err) {
            console.log(err)
        }
        res.send(result)
    }
})

app.post('/checkout', (req, res) => {
  if (req.body.products) {
    var products = req.body.products;
    products.forEach(product => {
      sendDataToSpringServer("/addTransaction",{
        itemid: product.itemid,
        date: Date.now(),
        prize: product.prize
      })
      sendDataToSpringServer("/addProduct",{
        itemid: product.itemid,
        name: product.name,
        prize: product.prize
      })
      Product.updateOne({ "itemid" : product.itemid }, { $inc: {quantity: -1}}, (err, msg) => {
        if(err){
          console.log(err)
          res.status(500).send("Hiba a terméknél")
        } else {
          console.log(msg)
          res.send("Sikeres")
        }
      })
    });
  }
})


function sendDataToSpringServer(url, data){
  var tr = JSON.stringify(data)
  var options = {
    host: process.env.SPRING_SERVER_URL,
    port: process.env.SPRING_SERVER_PORT,
    path: url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': tr.length
    }
  };

  var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log("Szerver válasz: " + chunk);
    });
  });
  req.write(tr);
  req.end();
}

var port = process.env.PORT
app.listen(port)