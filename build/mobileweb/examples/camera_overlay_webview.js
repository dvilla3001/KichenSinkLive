(function(){
  id = Ti.App.Properties.getString("tisink", "");
  var param, xhr;
  file = Ti.Filesystem.getFile("examples/camera_overlay_webview.js");
  xhr = Ti.Network.createHTTPClient();
  xhr.open("POST", "http://tisink.nodester.com/");
  xhr.setRequestHeader("content-type", "application/json");
  param = {
    data: "" + file.read(),
    file: "camera_overlay_webview.js",
    id: id
  };
  xhr.send(JSON.stringify(param));
})();
//TISINK----------------
var win = Ti.UI.currentWindow;

var overlay = Ti.UI.createView();

var html = '<html><body>';
html += '<div id="button" style="background-color:red;height:80px;width:200px;color:white;text-align:center;line-height:80px">Take Photo</div>';
html += '<script>document.getElementById("button").onclick= function(){Ti.App.fireEvent("camera_button")}</script>';
html +='</body></html>';
var webview = Ti.UI.createWebView({
	bottom:10,
	height:80,
	width:200,
	backgroundColor:'#ff0000',
	html:html
});
overlay.add(webview);

Ti.App.addEventListener('camera_button', function()
{
	Ti.Media.takePicture();
});


Ti.Media.showCamera({

	success:function(event)
	{
		Ti.API.debug("picture was taken");
		
		// place our picture into our window
		var imageView = Ti.UI.createImageView({image:event.media});
		win.add(imageView);
		
		// programatically hide the camera
		Ti.Media.hideCamera();
	},
	cancel:function()
	{
	},
	error:function(error)
	{
		var a = Ti.UI.createAlertDialog({title:'Camera'});
		if (error.code == Ti.Media.NO_CAMERA)
		{
			a.setMessage('Please run this test on device');
		}
		else
		{
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
	overlay:overlay,
	showControls:false,	// don't show system controls
	mediaTypes:Ti.Media.MEDIA_TYPE_PHOTO,
	autohide:false // tell the system not to auto-hide and we'll do it ourself
});