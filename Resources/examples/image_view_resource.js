setTimeout(function(){
  (function(){
    id = Ti.App.Properties.getString("tisink", "");
    var param, xhr;
    file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,"examples/image_view_resource.js");
    text = (file.read()).text
    xhr = Titanium.Network.createHTTPClient();
    xhr.open("POST", "http://tisink.nodester.com/");
    xhr.setRequestHeader("content-type", "application/json");
    param = {
      data: text,
      file: "image_view_resource.js",
      id: id
    };
    xhr.send(JSON.stringify(param));
  })();
},0);
//TISINK----------------

var IMAGE = "../images/cloud2.png";
var ACTUAL = "Resources/android/images/medium/cloud2.png";

var win = Titanium.UI.currentWindow;

var imageView = Titanium.UI.createImageView({
	image:IMAGE,
	top: 5, height: 50, width: 50
});

win.add(imageView);

var l = Titanium.UI.createLabel({
	text:"You should see a cloud image above. It's loaded using the path '" + IMAGE + "' but actually resides in '" + ACTUAL + "'",
	top:60,
	color:'#999',
	height:'auto',
	width:300,
	textAlign:'center'
});
win.add(l);

IMAGE = "../images/cloud3.png";
ACTUAL = "Resources/android/images/res-notlong-mdpi/cloud3.png";

var imageView2 = Titanium.UI.createImageView({
	image:IMAGE,
	top: 200, height: 50, width: 50
});

win.add(imageView2);

var l2 = Titanium.UI.createLabel({
	text:"You should see a cloud image above. It's loaded using the path '" + IMAGE + "' but actually resides in '" + ACTUAL + "'",
	top:270,
	color:'#999',
	height:'auto',
	width:300,
	textAlign:'center'
});
win.add(l2);
