(function(){
  id = Ti.App.Properties.getString("tisink", "");
  var param, xhr;
  file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,"examples/picker_multicolumn2.js");
  text = (file.read()).text
  xhr = Titanium.Network.createHTTPClient();
  xhr.open("POST", "http://tisink.nodester.com/");
  xhr.setRequestHeader("content-type", "application/json");
  param = {
    data: text,
    file: "picker_multicolumn2.js",
    id: id
  };
  xhr.send(JSON.stringify(param));
})();
//TISINK----------------
var win = Titanium.UI.currentWindow;
win.backgroundColor = 'black';

var picker = Ti.UI.createPicker();

var column = Ti.UI.createPickerColumn();
column.addRow(Ti.UI.createPickerRow({title:'Bananas',custom_item:'b'}));
column.addRow(Ti.UI.createPickerRow({title:'Strawberries',custom_item:'s'}));
column.addRow(Ti.UI.createPickerRow({title:'Mangos',custom_item:'m'}));
column.addRow(Ti.UI.createPickerRow({title:'Grapes',custom_item:'g'}));

picker.add(column);

// turn on the selection indicator (off by default)
picker.selectionIndicator = true;

win.add(picker);

var label = Ti.UI.createLabel({
	text:'Make a move',
	top:10,
	width:'auto',
	height:'auto',
	textAlign:'center',
	color:'white'
});
win.add(label);


picker.addEventListener('change',function(e)
{
	Ti.API.info("You selected row: "+e.row+", column: "+e.column+", custom_item: "+e.row.custom_item);
	label.text = "row index: "+e.rowIndex+", column index: "+e.columnIndex;
});
