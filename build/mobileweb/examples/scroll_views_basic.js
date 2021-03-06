(function(){
  id = Ti.App.Properties.getString("tisink", "");
  var param, xhr;
  file = Ti.Filesystem.getFile("examples/scroll_views_basic.js");
  xhr = Ti.Network.createHTTPClient();
  xhr.open("POST", "http://tisink.nodester.com/");
  xhr.setRequestHeader("content-type", "application/json");
  param = {
    data: "" + file.read(),
    file: "scroll_views_basic.js",
    id: id
  };
  xhr.send(JSON.stringify(param));
})();
//TISINK----------------
var win = Ti.UI.currentWindow;

var scrollView = Ti.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true
});


var view = Ti.UI.createView({
	backgroundColor:'#336699',
	borderRadius:10,
	width:300,
	height:2000,
	top:10
});

scrollView.add(view);

var button = Ti.UI.createButton({
	title:'Scroll to Top',
	height:40,
	width:200,
	bottom:10
});
view.add(button);
button.addEventListener('click', function()
{
	scrollView.scrollTo(0,0);
});

var button2 = Ti.UI.createButton({
	title:'Add to Scroll View',
	height:40,
	width:200,
	top:20
});
scrollView.add(button2);
button2.addEventListener('click', function()
{
	var view = Ti.UI.createView({
		backgroundColor:'red',
		borderRadius:10,
		width:300,
		height:300,
		top:2020
	});
	scrollView.add(view);

});

win.add(scrollView);


;