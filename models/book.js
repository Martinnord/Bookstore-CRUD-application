var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    author: {
        type: String,
        require: true
    },
    publisher: {
        type: String
    },
    pages: {
        type: String
    },
    images_url: {
        type: String
    },
    buy_url: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Genre obj will be available from anywhere else
var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}

// Get Book
module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
}

// Add Book
module.exports.addBook = function(book, callback) {
    Book.create(book, callback);
}

// Update Book
module.exports.updateBook = function(id, book, options, callback) {
    var query = {
        _id: id
    };
    var update = {
        title: book.name,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        images_url: book.images_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = function(id, callback) {
    var query = {
        _id: id
    };
    Book.remove(query, callback);
}
