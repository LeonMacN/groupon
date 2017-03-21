var db = require('mongoose');

var ObjectId = db.Schema.ObjectId;
var Schema = new(db.Schema)({
  title: {type: String, trim: true, required: true},
  done: {type: Boolean, default: false}
});

Schema.methods.toJSON = function(params) {
  return {
    title: this.title,
    done: this.done,
    id: this._id
  };
};

Schema.statics.add = function(args, fn) {
  var todo = new Todo(args);
  return todo.save(function(){
    fn();
  });
};

Schema.statics.get = function(args, fn) {
  return this.findById(args, function(err, todoObj){
    fn(todoObj);
  });
};

Schema.statics.fetch = function(args, fn) {
  return this.find({}, function(err, data){
    fn(data);
  });
};

Schema.statics.change = function(args, fn) {
  return this.update(args.id, args.values, {}, function(){
    fn();
  })
};

Schema.statics.remove = function(args, fn) {
  return this.find(args).remove(function(){
    fn();
  });
};

var Todo = db.model('Todo', Schema);
