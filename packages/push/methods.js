Meteor.methods({
	// send a push notification
	serverNotification: (name, ...params){
		console.log("sending push...");
		Push.send({
			from: 'push',
			title: 'Hello World',
			text: 'This notification has been sent from the SERVER',
			badge: 1,
			payload: {},
			query: {}
		});
	}
});
