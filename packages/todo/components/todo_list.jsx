TodoList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let selector = {category: {$ne: "private"}};
    let handle = Meteor.subscribe('todos', selector);
    let data = {};
    if(handle.ready()) {
      data.todos = Todos.find({}, {sort: {_id: 1}}).fetch();
    }
    return data;
  },
  getList() {
    return <ul>
      {this.data.todos.map(function(todo) {
        let path = FlowRouter.path('todo', {_id: todo._id})
        return <li key={todo._id}><a href={path}>{todo.title}</a></li>
      })}
    </ul>;
  },
  render() {
    return <div className="section">
      <h3>Todo List</h3>
      <p>(This is actually a React component...)</p>
      {(this.data.todos)? this.getList() : "loading..."}
    </div>;
  }
});
