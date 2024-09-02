const { getAllMessages, deleteMessageById } = require('../db/queries');

const getMessages = async function (req, res, next) {
  const messages = await getAllMessages()
  res.render('index', { title: "Mini Messageboard", messages });
}

const deleteMessagePost = async function (req, res, next) {

  await deleteMessageById(Number(req.params.id));
  res.redirect('/');

}

module.exports = { getMessages, deleteMessagePost }