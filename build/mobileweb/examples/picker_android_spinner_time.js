(function(){
  id = Ti.App.Properties.getString("tisink", "");
  var param, xhr;
  file = Ti.Filesystem.getFile("examples/picker_android_spinner_time.js");
  xhr = Ti.Network.createHTTPClient();
  xhr.open("POST", "http://tisink.nodester.com/");
  xhr.setRequestHeader("content-type", "application/json");
  param = {
    data: "" + file.read(),
    file: "picker_android_spinner_time.js",
    id: id
  };
  xhr.send(JSON.stringify(param));
})();
//TISINK----------------
var win = Ti.UI.currentWindow;
win.backgroundColor = 'black';

var value = new Date();
value.setMinutes(10);
value.setHours(13);
value.setSeconds(48);
		
var picker = Ti.UI.createPicker({
	useSpinner:true,
	type:Ti.UI.PICKER_TYPE_TIME,
	value:value
});

// turn on the selection indicator (off by default)
picker.selectionIndicator = true;

win.add(picker);

var label = Ti.UI.createLabel({
	text:'Choose a time',
	top:6,
	width:'auto',
	height:'auto',
	textAlign:'center',
	color:'white'
});
win.add(label);

picker.addEventListener('change',function(e)
{
	label.text = e.value;
});