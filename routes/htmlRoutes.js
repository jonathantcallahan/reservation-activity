const path = require('path');

module.exports = function(app) {
    app.get('/', (req, res) => {
        console.log('something')
        res.sendFile(path.join(__dirname, '../html/home.html'));
        console.log(req.path)
    })
    
    app.get('/reserve', (req,res) => {
        res.sendFile(path.join(__dirname, '../html/reserve.html'))
        console.log(req.path)
    })
    
    app.get('/table', (req, res) => {
        res.sendFile(path.join(__dirname, '../html/table.html'));
        console.log(req.path);
    });
}

