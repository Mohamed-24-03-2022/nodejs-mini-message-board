const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Good morning everyone!",
    user: "Emily",
    added: new Date()
  },
  {
    text: "Just joined the chat!",
    user: "David",
    added: new Date()
  },
  {
    text: "Nice to meet you all!",
    user: "Sophia",
    added: new Date()
  },
  {
    text: "Looking forward to learning with you!",
    user: "Oliver",
    added: new Date()
  }
];

const getMessages = function (req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages });
}

module.exports = { messages, getMessages }