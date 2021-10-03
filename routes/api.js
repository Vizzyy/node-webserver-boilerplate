const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('api')
})

// GET http://hostname/api/get
router.get(`/get`, function (req, res) {
    res.send(req.query); // return query params
});

// POST http://hostname/api/post
router.post(`/post`, function (req, res) {
    res.send(req.params); // return body params
});


module.exports = router;
