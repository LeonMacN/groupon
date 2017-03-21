var db = require('mongoose'),
    Todo = db.model('Todo');

module.exports = (function(app) {
  app.route('/todos')
    .post(function(req, res) {
      Todo.add({title:req.body.title, done:req.body.enabled}, function(){
        Todo.fetch({}, function(response){
          res.send(response);
        });
      })
    })
    .get(function(req, res) {
      Todo.fetch({}, function(response){
        res.json(response);
      });
    });

  app.route('/todos/:id')
    .get(function(req, res) {
      Todo.get(req.params.id, function(response){
        res.json(response);
      });
    })
    .put(function(req, res) {
      var params = {
        id: {_id:req.params.id},
        values: {title: req.body.title, done: req.body.done}
      };
      Todo.change(params, function(){
        Todo.fetch({}, function(response){
          res.json(response);
        });
      })
    })
    .delete(function(req, res) {
      Todo.remove({_id:req.params.id}, function(){
        Todo.fetch({}, function(response){
          res.send(response);
        });
      });
    });
});
