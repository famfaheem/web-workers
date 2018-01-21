var request = new XMLHttpRequest();
request.onreadystatechange = function() {
	if (request.readyState === 4 && request.status === 200) {
		var i = 0;
		setInterval(function() {
			if (i < JSON.parse(request.responseText).length) {
				var url = JSON.parse(request.responseText);
				postMessage(url[i].avatar_url);
				i += 1;
			} else {
				self.close();
				console.log("service worker terminated");
			}
		}, 300);
	}
};
request.open("GET", "https://api.github.com/users", true);
request.send(null);