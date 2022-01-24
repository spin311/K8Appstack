const express = require('express');
const mongoose = require('mongoose');
const { exec } = require('child_process');
exec("/usr/share/nginx/html/myapp", (error, stdout, stderr) => {
  if(error) return;

  if(stderr) {
    console.log(`stdout: ${stdout}`);
    return;
  } 
    console.log(`${stdout}`);
    console.log("AAAAAAAAAAAAAAAAAAA");
});


const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

// connect to mongoDb using mongoose + newUrlParser to get rid of warning
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )

const Item = require('./models/Item');

app.get('/', (req, res) => {
  Item.find()
    .then(items => res.render('index', { items }));
});

//add item (h, w, bmi, name)
app.post('/item/add', (req, res) => {
  const newItem = new Item({
    height: req.body.height,
    weight: req.body.weight,
    bmi: req.body.weight / ((req.body.height * req.body.height) / 10000),
    name: req.body.name
  });

  newItem.save().then(item => res.redirect('/'));
});

const port = 3000;
//open port 3000
app.listen(port);


