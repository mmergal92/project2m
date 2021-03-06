//DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config()
const PORT = process.env.PORT || 8080;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/brandingcrud';
console.log(MONGODB_URI);

//MIDDLEWARE
//body parser
app.use(express.urlencoded({extended: false}));
//For delete + update
app.use(methodOverride('_method'));
app.use(express.json());
//static files
app.use(express.static('public'))

//CONFIGURATION
mongoose.connect(MONGODB_URI, {
  useNewURLParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false,
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

//CONTROLLERS
//new brand user input
const db = mongoose.connection;
const usersController = require('./controllers/users.js');
const brandData = require('./models/brands.js');
const seedBrand = require('./models/seed.js');
const { application } = require('express');
app.use('/users', usersController);

//ROUTES
//Index Route
// app.get('/', (req, res) =>{
//       res.render('index.ejs',{})
// })

//Index Route
app.get('/', (req, res) =>{
      brandData.find({}, (err, allData)=>{
      res.render('index.ejs',{
        allData: allData,
      })
})
})

// Seed Route
app.get('/seedBrand', (req, res) => {
  // seeds the data
  brandData.create(seedBrand, (err, createdData) => {
    // logs created users
    console.log(createdData);
    // redirects to index
    res.redirect('/');
    // data: createdData;
  });
});

//LISTENERS + CONNECTIONS
app.listen(PORT, () =>{
    console.log('listening on part: ', PORT);
});
