(function(){
  id = Ti.App.Properties.getString("tisink", "");
  var param, xhr;
  file = Ti.Filesystem.getFile("examples/table_view_delete_3.js");
  xhr = Ti.Network.createHTTPClient();
  xhr.open("POST", "http://tisink.nodester.com/");
  xhr.setRequestHeader("content-type", "application/json");
  param = {
    data: "" + file.read(),
    file: "table_view_delete_3.js",
    id: id
  };
  xhr.send(JSON.stringify(param));
})();
//TISINK----------------
var win = Ti.UI.currentWindow;

// create table view data object
var data = [
	{title:'Row 1', header:'header 1'},
	{title:'Row 2', header:'header 2'},
	{title:'Row 3', header:'header 3'},
	{title:'Row 4', header:'header 4'}
	

];

// create table view
var tableview = Ti.UI.createTableView({
	data:data,
	editable:true
});

// add delete event listener
tableview.addEventListener('delete',function(e)
{
	var s = e.section;
	Ti.API.info('rows ' + s.rows + ' rowCount ' + s.rowCount + ' headerTitle ' + s.headerTitle + ' title ' + e.rowData.title);

	Ti.API.info("deleted - row="+e.row+", index="+e.index+", section="+e.section + ' foo ' + e.rowData.foo);
});

// add table view to the window
Ti.UI.currentWindow.add(tableview);

//
//  create edit/cancel buttons for nav bar
//
var edit = Ti.UI.createButton({
	title:'Edit'
});

edit.addEventListener('click', function()
{
	win.setRightNavButton(cancel);
	tableview.editing = true;
});

var cancel = Ti.UI.createButton({
	title:'Cancel',
	style:Ti.UI.iPhone.SystemButtonStyle.DONE
});
cancel.addEventListener('click', function()
{
	win.setRightNavButton(edit);
	tableview.editing = false;
});

win.setRightNavButton(edit);