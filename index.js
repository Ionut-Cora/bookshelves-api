const PORT = process.env.PORT || 8000;
const express = require('express');
const app = express();
const books = require('./db.json');

app.get('/', (req,res) => {
    res.json(`Welcome to my Books API`);
});


app.get('/books', (req, res) => {
    res.json(books);
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
