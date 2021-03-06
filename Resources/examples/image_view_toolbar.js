setTimeout(function(){
  (function(){
    id = Ti.App.Properties.getString("tisink", "");
    var param, xhr;
    file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,"examples/image_view_toolbar.js");
    text = (file.read()).text
    xhr = Titanium.Network.createHTTPClient();
    xhr.open("POST", "http://tisink.nodester.com/");
    xhr.setRequestHeader("content-type", "application/json");
    param = {
      data: text,
      file: "image_view_toolbar.js",
      id: id
    };
    xhr.send(JSON.stringify(param));
  })();
},0);
//TISINK----------------

// attempt to simulate a changing of image on toolbar

var win = Ti.UI.currentWindow;


/*var camera = Titanium.UI.createButton({
	backgroundImage:'../images/camera.png',
	height:33,
	width:33
});*/

var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});


var button1 = Ti.UI.createImageView({
	height:33,
	width:33,
	image:'../images/camera.png'
});

var button2 = Ti.UI.createImageView({
	height:33,
	width:33,
	image:'../images/camera.png'
});


var textview = Ti.UI.createTextArea({
	top:10,
	value:"just focus here for keyboard\n\nClick on the left button and it should change\nbut not move",
	keyboardToolbar:[flexSpace,button1,button2],
	keyboardToolbarColor: '#999',	
	keyboardToolbarHeight: 40
});

win.add(textview);

button1.addEventListener('click',function()
{
	button1.image = '../images/apple_logo.jpg';
});
