const { getAllAuthors } = require('./models/Author');
const { getAllBooks, getByAuthorId, getId } = require('./models/Book');
const express = require('express');

const app = express();

app.get('/authors', async (_req, res) => {
    const authors = await getAllAuthors();
    res.status(200).json(authors);
});

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const book = await getId(id);
    
    if (!book) return res.status(401).json({ message: 'Not found' })

    res.status(200).json(book);
});

app.get('/books', async (req, res) => {
    const { author_id } = req.query;
    if ( author_id ) {
        const book = await getByAuthorId(author_id);
        res.status(200).json(book);
    }
    const books = await getAllBooks();
    res.status(200).json(books);   
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
//