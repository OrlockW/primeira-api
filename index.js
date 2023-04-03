var express = require('express');
var app = express();

app.post('/create', (req, res) => {

    console.log('Rota acessada');
    res.json({})
})

app.post('/consult', (req, res) => {

    console.log('Rota acessada');    
    console.log(req.query);
    res.json({});
})

app.listen(3000, () => {
    console.log('Server ok');

})

