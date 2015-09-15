Todos = new Meteor.Collection('todos');
if (Meteor.isServer) {
	Todos.remove({});
	Todos.insert({
		_id: 'add-docs',
		title: 'Add Docs',
		content: 'Documentation is very lacking.'
	});
	Todos.insert({
		_id: 'add-links',
		title: 'Add Links',
		content: 'What links do we need to add?'
	});
	Todos.insert({
		_id: 'add-components',
		title: 'Add More React Components',
		content: 'What kind of React components should we add?'
	});
	Todos.insert({
		_id: 'private',
		title: 'You won\'t see this, yet.',
		content: 'blah blah blah',
		category: 'private'
	});
}
