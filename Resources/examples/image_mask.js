setTimeout(function(){
  (function(){
    id = Ti.App.Properties.getString("tisink", "");
    var param, xhr;
    file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,"examples/image_mask.js");
    text = (file.read()).text
    xhr = Titanium.Network.createHTTPClient();
    xhr.open("POST", "http://tisink.nodester.com/");
    xhr.setRequestHeader("content-type", "application/json");
    param = {
      data: text,
      file: "image_mask.js",
      id: id
    };
    xhr.send(JSON.stringify(param));
  })();
},0);
//TISINK----------------

var win = Titanium.UI.currentWindow;
win.backgroundColor = '#ccc';

// put the image mask (which must be non-transparent, black) in the back
var mask = Titanium.UI.createMaskedImage({
	image:'../images/body-mask.png',
	tint: 'brown',
	mode: Titanium.UI.iOS.BLEND_MODE_SOURCE_IN
});

// layer on top the image that is transparent that you want to blend
var image = Titanium.UI.createMaskedImage({
	image:'../images/body.png',
	tint: 'black',
	mode: Titanium.UI.iOS.BLEND_MODE_SOURCE_IN
});


// now create some buttons to dynamically change the color of the body

var btn1 = Titanium.UI.createView({
	right:10,
	width:40,
	height:40,
	bottom:110,
	backgroundColor:'white',
	borderColor:'black'
});

var btn2 = Titanium.UI.createView({
	right:10,
	width:40,
	height:40,
	bottom:60,
	backgroundColor:'brown',
	borderColor:'black'
});

var btn3 = Titanium.UI.createView({
	right:10,
	width:40,
	height:40,
	bottom:10,
	backgroundColor:'black',
	borderColor:'black'
});

win.add(mask);
win.add(image);

win.add(btn1);
win.add(btn2);
win.add(btn3);


btn1.addEventListener('click',function()
{
	mask.tint = 'white';
});

btn2.addEventListener('click',function()
{
	mask.tint = 'brown';
});

btn3.addEventListener('click',function()
{
	mask.tint = '#666';
});

