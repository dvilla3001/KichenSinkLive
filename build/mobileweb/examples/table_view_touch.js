(function(){
  id = Ti.App.Properties.getString("tisink", "");
  var param, xhr;
  file = Ti.Filesystem.getFile("examples/table_view_touch.js");
  xhr = Ti.Network.createHTTPClient();
  xhr.open("POST", "http://tisink.nodester.com/");
  xhr.setRequestHeader("content-type", "application/json");
  param = {
    data: "" + file.read(),
    file: "table_view_touch.js",
    id: id
  };
  xhr.send(JSON.stringify(param));
})();
//TISINK----------------
// create table view data object
var data = [];

for (var x=0;x<4;x++)
{
	//var view = Ti.UI.createView();
	var label = Ti.UI.createLabel({
		text:'Row Label ' + x,
		height:'auto',
		width:'auto',
		color:'#336699',
		left:10
	});
	var row = Ti.UI.createTableViewRow({height:50});
	//view.add(label);
	row.add(label);
	data.push(row);
}

// create table view
var tableview = Ti.UI.createTableView({
	data:data
});

tableview.addEventListener('touchstart', function(e)
{
	e.row.children[0].color = '#fff';
});

tableview.addEventListener('touchend', function(e)
{
	e.row.children[0].color = '#336699';
});


// add table view to the window
Ti.UI.currentWindow.add(tableview);