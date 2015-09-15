Meteor.startup(function () {

    Push.debug = true;

    Push.addListener('error', function(err) {
        if (err.type == 'apn.cordova') {
            console.log("error", err.error);
        }
    });

    Push.addListener('register', function(evt) {
        console.log("register", JSON.stringify(notification))
    });

    Push.addListener('alert', function(notification) {
        console.log("alert", JSON.stringify(notification))
    });

    Push.addListener('sound', function(notification) {
        console.log("sound", JSON.stringify(notification))
    });

    Push.addListener('badge', function(notification) {
        console.log("badge", JSON.stringify(notification))
    });

    Push.addListener('startup', function(notification) {
        console.log("startup", JSON.stringify(notification))
    });

	Push.addListener('token', function(token) {
		console.log("token", JSON.stringify(token));

		Meteor.call('raix:push-update', token, function(err, result) {
			if (err) {
				console.log("ERROR: ", err)
			} else {
				console.log("Succesfully added: " + result)
			}
		});
	});

	Push.addListener('message', function(notification) {
		// Called on every message
		console.log(JSON.stringify(notification))

		function alertDismissed() {

		}
		alert(notification.message, alertDismissed, notification.title, "Ok");
	});
    
});