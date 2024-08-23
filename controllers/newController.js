const indexController = require('./indexController');

const get = function (req, res, next) {
  res.render('form', { title: "Add a new message" });
}

const post = function (req, res, next) {

  const { text, user } = req.body
  const added = new Date();

  indexController.messages.push({ text, user, added })

  res.redirect('/');
}


module.exports = { get, post }



