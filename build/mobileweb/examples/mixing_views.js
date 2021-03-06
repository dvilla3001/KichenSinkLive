(function(){
  id = Ti.App.Properties.getString("tisink", "");
  var param, xhr;
  file = Ti.Filesystem.getFile("examples/mixing_views.js");
  xhr = Ti.Network.createHTTPClient();
  xhr.open("POST", "http://tisink.nodester.com/");
  xhr.setRequestHeader("content-type", "application/json");
  param = {
    data: "" + file.read(),
    file: "mixing_views.js",
    id: id
  };
  xhr.send(JSON.stringify(param));
})();
//TISINK----------------
// create table view data object
var data = [
	{title:'Example 1', hasChild:true, test:'../examples/mixing_views_1.js'},
	{title:'Example 2', hasChild:true, test:'../examples/mixing_views_2.js'},
	{title:'Example 3', hasChild:true, test:'../examples/mixing_views_3.js'},
	{title:'Example 4', hasChild:true, test:'../examples/mixing_views_4.js'}

];

// create table view
var tableview = Ti.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Ti.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Ti.UI.currentTab.open(win,{animated:true});
	}
});

// add table view to the window
Ti.UI.currentWindow.add(tableview);