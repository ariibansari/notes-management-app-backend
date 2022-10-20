const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Node Server is Live<h1>');
})

app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`)
})