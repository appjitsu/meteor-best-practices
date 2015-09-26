TodoPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let handle = Meteor.subscribe('singleTodo', this.props._id);
    let data = {};
    if(handle.ready()) {
      data.todo = Todos.findOne({_id: this.props._id});
    }

    return data;
  },
  getContent() {
    return <div>
      <p>(This is a React component, too...)</p>
      <a href="/">Back</a>
      <h3>{this.data.todo.title}</h3>
      <p>{this.data.todo.content}</p>
    </div>;
  },
  render() {
    return (this.data.todo)? this.getContent() : <div>loading...</div>;
  }
});
