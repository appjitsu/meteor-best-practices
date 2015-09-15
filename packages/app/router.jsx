FlowRouter.route("/", {
	action: function() {
		ReactLayout.render(HomeLayout, {
			content: < TodoList / >
		});
	}
});

FlowRouter.route('/todo/:_id', {
	name: 'todo',
	action: function(params) {
		ReactLayout.render(DefaultLayout, {
			content: < TodoPage _id = { params._id } />
		});
	}
});
