'use strict';

const db = require(`../models`);

module.exports = app => {
  app.get(`/alltodos`, (req, res) => {
    db.Todo.findAll({}).then(dbTodos => {
      res.json(dbTodos);
    });
  });

  app.post(`/addtodo`, (req, res) => {
    db.Todo.create({
      text: `temp TODO`
    })
      .then(dbTodo => {
        const statusCreated = 201;
        res.status(statusCreated).send(dbTodo);
      })
      .catch(err => {
        console.error(err);
        res.json(err);
      });
  });

  app.get(`/myroute`, (req, res) => {
    res.send(`hey, you hit my route!`);
  });

  app.put(`/api/todos`, (req, res) => {
    db.Todo.update(
      {
        text: req.body.text,
        isComplete: req.body.isComplete
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(dbTodo => {
      res.json(dbTodo);
    });
  });

  app.delete(`/api/todos/:id`, (req, res) => {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbTodo => {
      res.json(dbTodo);
    });
  });
};
