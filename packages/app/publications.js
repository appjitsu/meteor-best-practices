Meteor.publish('todos', function(selector) {
  return Todos.find(selector);
});

Meteor.publish('singleTodo', function(_id) {
  return Todos.find({_id: _id});
});
