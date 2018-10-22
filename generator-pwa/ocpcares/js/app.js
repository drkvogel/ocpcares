
// set up service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('../sw.js', { scope: '/' }).then((reg) => {
		if (reg.installing) {
			console.log('Service worker installing');
		} else if(reg.waiting) {
			console.log('Service worker installed');
		} else if(reg.active) {
			console.log('Service worker active');
		}
		
	}).catch((error) => {
		console.log('Registration failed with ' + error); // Registration failed
	});

  // Communicate with the service worker using MessageChannel API.
  function sendMessage(message) {
    return new Promise((resolve, reject) => {
      const messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = function(event) {
        resolve(`Direct message from SW: ${event.data}`);
      };

      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2])
    });
  }
}

$().ready(function () { //$(document).ready(
	console.log('jQuery Document ready');
});

function showClip() {
	console.log("showClip()");
	vidSource.attr('src', 'video/wecare-short.mp4');
	$('#main').hide();
	$('#vidcontainer').show();
	var vid = $('#vid').get(0);
	setTimeout(() => {
		console.log('timeout');
		vid.load();
		vid.play();
	}, 1000);
}

function videoEnd() {
	console.log("ended");
	$('#vidcontainer').hide();
	$('#main').show();
}

var vid = $('#vid').get(0);
var vidSource = $('#vid>source');
vid.addEventListener('ended', videoEnd, false);
