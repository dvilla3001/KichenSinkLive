setTimeout(function(){
  (function(){
    id = Ti.App.Properties.getString("tisink", "");
    var param, xhr;
    file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,"examples/contacts_searchById.js");
    text = (file.read()).text
    xhr = Titanium.Network.createHTTPClient();
    xhr.open("POST", "http://tisink.nodester.com/");
    xhr.setRequestHeader("content-type", "application/json");
    param = {
      data: text,
      file: "contacts_searchById.js",
      id: id
    };
    xhr.send(JSON.stringify(param));
  })();
},0);
//TISINK----------------

var win = Ti.UI.currentWindow;	
var tf1 = Titanium.UI.createTextField({
	color: '#336699',
	top: 20,
	width: 250,
	height: 40,
	hintText: 'RecordID Number',
	keyboardType: Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	returnKeyType: Titanium.UI.RETURNKEY_DONE,
	clearOnEdit: true,
	returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
var b1 = Titanium.UI.createButton({
	title: 'FIND RECORD BY ID',
	height: 40,
	width: 250,
	top: 65
});
b1.addEventListener('click', function()
{
	tf1.blur();
	var val = tf1.value;
	try{
		var p = Ti.Contacts.getPersonByID(val);
		if (p == null)
		{
			alert("Could not find record for " + val);
		}	
		else
		{
			alert(p.fullName);
		}
	} catch(E) {
		alert("Invalid input: " + val);
	}

});

if (Titanium.Platform.osname != 'android') {
	var tf2 = Titanium.UI.createTextField({
		color: '#336699',
		top: 120,
		width: 250,
		height: 40,
		hintText: 'Contact GroupID Number',
		keyboardType: Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
		returnKeyType: Titanium.UI.RETURNKEY_DONE,
		clearOnEdit:true,
		returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	win.add(tf2);
	var b2 = Titanium.UI.createButton({
		title: 'FIND GROUP BY ID',
		height: 40,
		width: 250,
		top: 165
	});
	win.add(b2);
	b2.addEventListener('click', function()
	{
		tf2.blur();
		var val = tf2.value;
		var p = Ti.Contacts.getGroupByID(val);
		if (p == null)
		{
			alert("INVALID GROUP");
		}	
		else
		{
			alert(p.name);
		}
	});
}
tf1.addEventListener('return', function(e)
{
	tf1.blur();
});
win.add(tf1);
win.add(b1);
win.open();