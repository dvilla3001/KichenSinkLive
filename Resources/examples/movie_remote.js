setTimeout(function(){
  (function(){
    id = Ti.App.Properties.getString("tisink", "");
    var param, xhr;
    file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,"examples/movie_remote.js");
    text = (file.read()).text
    xhr = Titanium.Network.createHTTPClient();
    xhr.open("POST", "http://tisink.nodester.com/");
    xhr.setRequestHeader("content-type", "application/json");
    param = {
      data: text,
      file: "movie_remote.js",
      id: id
    };
    xhr.send(JSON.stringify(param));
  })();
},0);
//TISINK----------------

var win = Titanium.UI.currentWindow;

var contentURL = 'http://movies.apple.com/media/us/ipad/2010/tours/apple-ipad-video-us-20100127_r848-9cie.mov';
if (Ti.Platform.name == 'android') {
	contentURL = "http://dts.podtrac.com/redirect.mp4/twit.cachefly.net/video/aaa/aaa0033/aaa0033_h264b_640x368_256.mp4";
}
var activeMovie = Titanium.Media.createVideoPlayer({
	url: contentURL,
	backgroundColor:'#111',
	movieControlMode:Titanium.Media.VIDEO_CONTROL_DEFAULT, // See TIMOB-2802, which may change this property name
	scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL
});

win.add(activeMovie);
var windowClosed = false;

activeMovie.addEventListener('complete',function()
{
	if (!windowClosed)
	{
		var dlg = Titanium.UI.createAlertDialog({title:'Movie', message:'Completed!'});
		if (Ti.Platform.name === "android") {
			win.close();
			dlg.show();
		} else {
			dlg.show();
			win.close();
		}
	}
});

activeMovie.play();

win.addEventListener('close', function() 
{
	if (!windowClosed)
	{
		windowClosed = true;
		activeMovie.stop();
	}
});
