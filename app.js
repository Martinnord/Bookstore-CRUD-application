const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Defining path for static folder
app.use(express.static(__dirname + '/client'));

app.use(bodyParser.json()); // initialize body parser

Genre = require('./models/genre');
Book = require('./models/book');

// Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection; // Database obj

// Setting up routes
app.get('/', function(req, res) {
    res.send("Please use /api/books or /api/genre");
});

app.get('/api/genres', function(req, res) {
    Genre.getGenres(function(err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);
    });
});

app.post('/api/genres', function(req, res) {
    var genre = req.body; // Everything from the form
    Genre.addGenre(genre, function(err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
});

app.put('/api/genres/:_id', function(req, res) {
    var id = req.params._id;
    var genre = req.body; // Everything from the form
    Genre.updateGenre(id, genre, {}, function(err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
});

app.delete('/api/genres/:_id', function(req, res) {
    var id = req.params._id;
    Genre.removeGenre(id, function(err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
});

app.post('/api/books', function(req, res) {
    var book = req.body; // Everything from the form
    Book.addBook(book, function(err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

app.get('/api/books', function(req, res) {
    Book.getBooks(function(err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    });
});

app.get('/api/books/:_id', function(req, res) {
    Book.getBookById(req.params._id, function(err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

app.put('/api/books/:_id', function(req, res) {
    var id = req.params._id;
    var book = req.body; // Everything from the form
    Book.updateBook(id, book, {}, function(err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

app.delete('/api/books/:_id', function(req, res) {
    var id = req.params._id;
    Book.removeBook(id, function(err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

app.listen(3000);
console.log("Running server on port 3000");
