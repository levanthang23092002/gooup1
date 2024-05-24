const express = require('express');
const router = express.Router();
router.post('/test', async (req, res) => {
    res.send({ userId: 0 })
  })

  module.exports = router;