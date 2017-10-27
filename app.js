const express = require('express');
const authRoute = require('./routes/auth.routes');

const app = express();


app.set('view engine', 'ejs');

app.use('/auth', authRoute);

app.get('/', (req, res) => {
    res.render('home');
})

app.listen('3000', () => {
    console.log('Listening on port 3000');
})
