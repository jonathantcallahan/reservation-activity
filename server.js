const express = require('express');
const path = require('path');
const tables = require('./data.js');
const tablesFull = require('./dataFull.js')
const bodyParser = require('body-parser')

const app = express();

const PORT = process.env.PORT || process.argv[2] || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./routes/htmlRoutes.js')(app)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

app.get('/api', (req,res) => {
    console.log(tables)
    res.json(tables);
})

app.post('/api', (req, res) => {
    if(tables.length < 5){
        tables.push(req.body)
    } else {
        tablesFull.push(req.body)
    }
    console.log(req.body)
})