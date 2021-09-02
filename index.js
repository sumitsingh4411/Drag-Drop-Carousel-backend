const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
const image = require('./image.json');

app.use(express.json());
app.use(cors());

app.get('/data', (req, res) => {
    res.json(image)
})

app.listen(PORT, () => {
    console.log('Listening on port No', PORT);
})