const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const app = express();
const productSchema = require("./models/Product");
const userSchema = require("./models/User");

require('dotenv').config();

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());

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

  app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

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