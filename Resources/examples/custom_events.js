setTimeout(function(){
  (function(){
    id = Ti.App.Properties.getString("tisink", "");
    var param, xhr;
    file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,"examples/custom_events.js");
    text = (file.read()).text
    xhr = Titanium.Network.createHTTPClient();
    xhr.open("POST", "http://tisink.nodester.com/");
    xhr.setRequestHeader("content-type", "application/json");
    param = {
      data: text,
      file: "custom_events.js",
      id: id
    };
    xhr.send(JSON.stringify(param));
  })();
},0);
//TISINK----------------

var win = Titanium.UI.currentWindow;

//
// FIRE EVENT WITH DATA ARRAY
//
var b1 = Titanium.UI.createButton({
	title:'Fire Event 1',
	width:200,
	height:40,
	top:10
});

b1.addEventListener('click', function()
{
	Titanium.App.fireEvent('event_one',{data:['1','2','3']});
});

win.add(b1);

//
// FIRE EVENT WITH OBJECT DATA
//
var b2 = Titanium.UI.createButton({
	title:'Fire Event 2',
	width:200,
	height:40,
	top:60
});

b2.addEventListener('click', function()
{
	Titanium.App.fireEvent('event_two',{name:'Foo', city:'Palo Alto'});
});

win.add(b2);


//
// FIRE EVENT WITH OBJECT DATA
//
var b3 = Titanium.UI.createButton({
	title:'Fire Event 3',
	width:200,
	height:40,
	top:110
});

b3.addEventListener('click', function()
{
	b2.fireEvent('click');
});

win.add(b3);

