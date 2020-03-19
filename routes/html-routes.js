'use strict';

module.exports = app => {
  app.get(`/myhtml`, (req, res) => {
    res.send(`<h1>I'm HTML!</h1>`);
  });
};
