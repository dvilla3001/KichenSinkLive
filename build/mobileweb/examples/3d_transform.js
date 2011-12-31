(function(){
  id = Ti.App.Properties.getString("tisink", "");
  var param, xhr;
  file = Ti.Filesystem.getFile("examples/3d_transform.js");
  xhr = Ti.Network.createHTTPClient();
  xhr.open("POST", "http://tisink.nodester.com/");
  xhr.setRequestHeader("content-type", "application/json");
  param = {
    data: "" + file.read(),
    file: "3d_transform.js",
    id: id
  };
  xhr.send(JSON.stringify(param));
})();
//TISINK----------------
var win = Ti.UI.currentWindow;
win.backgroundColor = '#000';

//
//  CREATE VIEW, LABEL and BUTTON
//
var view = Ti.UI.createView({
	height:100,
	width:100,
	backgroundColor:'#fff',
	borderRadius:12,
	borderWidth:1,
	borderColor:'#fff',
	opacity:0.5
});
var label = Ti.UI.createLabel({
	text:'1',
	font:{fontSize:60},
	width:'auto',
	height:'auto',
	textAlign:'center'
});
view.add(label);

var button = Ti.UI.createButton({
	title:'Animate',
	width:200,
	height:40,
	bottom:20
});

//
//  DO 3D MATRIX TRANSFORM
//
button.addEventListener('click', function()
{

	var t1 = Ti.UI.iOS.create3DMatrix();
	t1 = t1.translate(0,0,1000);
	t1.m34 = 1.0/-90;
	var a1 = Ti.UI.createAnimation();
	a1.transform = t1;
	a1.duration = 1000;
	a1.repeat = 1;
	view.animate(a1);

	a1.addEventListener('complete', function(e)
	{
			t1 = t1.rotate(180,1,1,0);
			t1 = t1.scale(2.0,2.0,2.0);
			t1.m34 = 1.0/-1500;
			var a1 = Ti.UI.createAnimation();
			a1.transform = t1;
			a1.duration = 1000;
			a1.repeat = 1;
			a1.autoreverse = true;
			view.animate(a1);

			a1.addEventListener('complete', function(e)
			{
					t1 = t1.rotate(180,0,1,1);
					t1 = t1.scale(3.0,3.0,3.0);
					t1.m34 = 1.0/-3000;
					var a3 = Ti.UI.createAnimation();
					a3.transform = t1;
					a3.duration = 1000;
					a3.repeat = 1;
					a3.addEventListener('complete',function()
					{
						view.animate({transform:Ti.UI.iOS.create3DMatrix(),duration:500});
					});
					view.animate(a3);
			});


	});

});

win.add(button);
win.add(view);