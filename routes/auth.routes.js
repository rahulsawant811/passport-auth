const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/logout', (req, res) => {
    res.send('logout');
});

router.get('/google', (req, res) => {
    res.send('Google');
});

module.exports = router;
