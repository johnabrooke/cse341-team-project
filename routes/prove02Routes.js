const path = require('path');

const express = require('express');

const router = express.Router();

const bookList = [];

router.get('/', (req, res, next) => {
    res.render('pages/prove02AddBook', {
        title: 'Add Book',
        path: '/prove02AddBook'
    });
}); 

router.post('/', (req, res, next) => {
    bookList.push({ 
        book: req.body.book,
        summary: req.body.summary
    });
    console.log(bookList);
    res.render('pages/prove02Display', {
        title: 'Book Summaries',
        path: '/prove02Display',
        book: req.body.book,
        summary: req.body.summary
    });
});

module.exports = router;
// exports.routes = router;
// exports.bookList = bookList;