const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'server is up and running. build more routes'
  });
});


module.exports = router;
