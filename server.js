const express = require('express');
const app = express();
const port = 3000;
const drinks = require('./models/drinks');
const food = require('./models/food');


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    });
});

app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {drink: drinks[req.params.id]});
});

app.get('/foods', (req, res) => {
    res.render('food_index.ejs', {
        allFood: food
    });
});

app.get('/foods/:id', (req, res) => {
    res.render('food_show.ejs', {food: food[req.params.id]});
});



// Listen
app.listen(port, () => {
    console.log(`Listening on port" ${port}`);
});
