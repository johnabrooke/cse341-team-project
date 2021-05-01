const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('prove02-view', {
        pageTitle: 'Enter Book',
        path: '/'
    });
});