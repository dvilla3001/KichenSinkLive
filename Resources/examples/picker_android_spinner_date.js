setTimeout(function(){
  (function(){
    id = Ti.App.Properties.getString("tisink", "");
    var param, xhr;
    file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,"examples/picker_android_spinner_date.js");
    text = (file.read()).text
    xhr = Titanium.Network.createHTTPClient();
    xhr.open("POST", "http://tisink.nodester.com/");
    xhr.setRequestHeader("content-type", "application/json");
    param = {
      data: text,
      file: "picker_android_spinner_date.js",
      id: id
    };
    xhr.send(JSON.stringify(param));
  })();
},0);
//TISINK----------------

var win = Titanium.UI.currentWindow;
win.backgroundColor = 'black';

var minDate = new Date();
minDate.setFullYear(2009);
minDate.setMonth(0);
minDate.setDate(1);

var maxDate = new Date();
maxDate.setFullYear(2009);
maxDate.setMonth(11);
maxDate.setDate(31);

var value = new Date();
value.setFullYear(2009);
value.setMonth(0);
value.setDate(1);

var picker = Ti.UI.createPicker({
	useSpinner: true,
	type:Ti.UI.PICKER_TYPE_DATE,
	minDate:minDate,
	maxDate:maxDate,
	value:value
});

// turn on the selection indicator (off by default)
picker.selectionIndicator = true;

win.add(picker);

var label = Ti.UI.createLabel({
	text:'Choose a date',
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

var locale = false;
var localebutton = Ti.UI.createButton({
	title:'Change locale',
	bottom:20,
	width:200,
	height:40
});
localebutton.addEventListener('click', function() {
	if (!locale) {
		picker.setLocale('ru');
		locale = true;
	}
	else {
		locale = false;
		picker.setLocale(Titanium.Platform.locale);
	}
});
win.add(localebutton);
