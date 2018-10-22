
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

function showClip() {
	console.log("showClip()");
	var randNum;
	do {
		randNum = rand(0, vids.length - 1); 
	} while (randNum == lastVid); // prevent last clip from playing again
	lastVid = randNum; // console.log("rand: " + randNum + "; vid: " + vids[randNum]);
	
	var vidPath = "video/" + vids[randNum] + ".mp4"; // console.log("vidPath: " + vidPath);
	vidSource.attr('src', vidPath);
	$('#main').hide();
	$('#vidcontainer').show();
	vid.load();
	vid.play();
}

function rand(min, max) { // Returns a random integer between min (inclusive) and max (inclusive)
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function videoEnd() {
	console.log("ended");
	$('#vidcontainer').hide();
	$('#main').show();
}

var vids = [
	"wecare-short",
	"ifyoucantstandtheheat",
	// "goodluckfrank",
	"ocp-morons"
];
// "stayoutofthekitchen"

var lastVid = -1;
var vid = $('#vid').get(0);
var vidSource = $('#vid>source');
vid.addEventListener('ended', videoEnd, false);

$().ready(function () { //$(document).ready(
	console.log('jQuery Document ready');
});