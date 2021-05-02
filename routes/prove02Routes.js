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
        title: req.body.book,
        summary: req.body.summary
    });
    console.log(bookList);
    res.render('pages/prove02Display', {
        title: 'View Books',
        path: '/prove02Display'
    });
});

    module.exports = router;
// exports.routes = router;
// exports.bookList = bookList;