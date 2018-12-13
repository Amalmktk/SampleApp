var mongoose = require('mongoose')

// book schema

var bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    pages: {
        type: String
    },
    image_url: {
        type: String,
        required: true
    },
    buy_url: {
        type: String,
        required: true
    }
})

var Book = module.exports = mongoose.model('Book', bookSchema);

//get genres

module.exports.getBooks= function(callback, limit) {
    Book.find(callback).limit(limit);
}

module.exports.getBookById= function(id, callback) {
    Book.findById(id, callback);
}

// add book

module.exports.addBook= function(book, callback) {
    Book.create(book, callback);
}

// update book

module.exports.updateBook= function(id, book, options, callback) {
    var query = {_id: id};
    var update = {
        title: book.title,
        genre: book.book,
        description: book.description,
        created_date: Date.now,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, options, callback);
}