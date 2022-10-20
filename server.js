const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const hostname = '0.0.0.0';

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Node Server is Live<h1>');
})

app.get('/name', (req, res) => {
    res.send('<h1>Arib</h1>');
})

app.get('/profession', (req, res) => {
    res.json({profession:'Full Stack Web Developer');
})

app.listen(PORT, hostname, ()=> {
    console.log(`Server started on port ${PORT}`)
})
