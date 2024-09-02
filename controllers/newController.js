
const { body, validationResult } = require('express-validator');

const { insertMessage } = require('../db/queries');

const get = function (req, res, next) {
  res.render('form', { title: "Add a new message" });
}

const post = [
  body('user')
    .trim()
    .isAlpha(),
  body('text')
    .trim()
    .isAlpha(),
  async function (req, res, next) {
    const { user, text } = req.body
    const added = new Date();

    await insertMessage(user, text, added.toISOString());

    res.redirect('/');
  }
]


module.exports = { get, post }



