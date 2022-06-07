const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router().get('/id', (req, res) => {
  const id = req.params.id;
  const matchingSign = zodiacs.find((zodiac) => zodiac.id === id);
  res.json(matchingSign);
});
