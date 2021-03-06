setTimeout(function(){
  (function(){
    id = Ti.App.Properties.getString("tisink", "");
    var param, xhr;
    file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,"examples/android_menu_1.js");
    text = (file.read()).text
    xhr = Titanium.Network.createHTTPClient();
    xhr.open("POST", "http://tisink.nodester.com/");
    xhr.setRequestHeader("content-type", "application/json");
    param = {
      data: text,
      file: "android_menu_1.js",
      id: id
    };
    xhr.send(JSON.stringify(param));
  })();
},0);
//TISINK----------------

var activity = Ti.Android.currentActivity;
var win = Ti.UI.currentWindow;

win.backgroundColor = 'white';

var menu = null;
var m1 = null;
var m2 = null;
var m3 = null;
var m4 = null;

var l1 = Ti.UI.createLabel({
	color : 'black',
	text : 'The Android menu is only created on demand. You must click it once. Item 1 toggles between enabled and disabled every time menu is pressed. Items 1 & 3 should have icons.',
	left : 10, top : 10, height : 80, right : 10
});
win.add(l1);

var b1 = Ti.UI.createButton({
	title : 'Add Item 2',
	left : 10, top : 100, right : 10, height : 40, enabled : false
});
b1.addEventListener('click', function(e) {
	if (menu != null) {
		m2 = menu.add({
			itemId : 2,
			groupId : 0,
			order : 1,
			title : 'Item 2'
		});
		m2.addEventListener('click', function(e) {
			Ti.UI.createNotification({
				message : 'Menu Item 2 selected'
			}).show();
		});
	}
});
win.add(b1);

var b2 = Ti.UI.createButton({
	title : 'Remove Item 2',
	left : 10, top : 150, right : 10, height : 40, enabled : false
});
b2.addEventListener('click', function(e) {
	if (menu != null) {
		m2 = menu.findItem(2);
		if (m2 != null) {
			menu.removeItem(2);
			m2 = null;
		}
	}
});
win.add(b2);

var b3 = Ti.UI.createButton({
	title : 'Add Group 1',
	left : 10, top : 200, right : 10, height : 40, enabled : false
});
b3.addEventListener('click', function(e) {
	if (menu != null) {
		m3 = menu.add({
			itemId : 3,
			groupId : 1,
			order : 2,
			title : 'Item 3'
		});
		m3.setIcon("app://images/appcelerator_small.png");
		m4 = menu.add({
			itemId : 4,
			groupId : 1,
			order : 3,
			title : 'Item 4'
		});
		Ti.UI.createNotification({ message : "Menu Size: " + menu.size() + " Items: " + menu.getItems().length}).show();
	}
});
win.add(b3);

var b4 = Ti.UI.createButton({
	title : 'Enable Group 1',
	left : 10, top : 250, right : 10, height : 40, enabled : false
});
b4.addEventListener('click', function(e) {
	if (menu != null) {
		menu.setGroupEnabled(1, true);
	}
});
win.add(b4);

var b5 = Ti.UI.createButton({
	title : 'Disable Group 1',
	left : 10, top : 300, right : 10, height : 40, enabled : false
});
b5.addEventListener('click', function(e) {
	if (menu != null) {
		menu.setGroupEnabled(1, false);
	}
});
win.add(b5);

var b6 = Ti.UI.createButton({
	title : 'Remove Group 1',
	left : 10, top : 350, right : 10, height : 40, enabled : false
});
b6.addEventListener('click', function(e) {
	if (menu != null) {
		menu.removeGroup(1);
		Ti.UI.createNotification({ message : "Menu Size: " + menu.size() + " Items: " + menu.getItems().length}).show();
	}
});
win.add(b6);

activity.onCreateOptionsMenu = function(e) {
	menu = e.menu; // save off menu.
	
	b1.enabled = true;
	b2.enabled = true;
	b3.enabled = true;
	b4.enabled = true;
	b5.enabled = true;
	b6.enabled = true;
	
	m1 = menu.add({
		itemId : 1,
		groupId : 0,
		order : 0
	});
	m1.setIcon("/images/appcelerator_small.png");
};

activity.onPrepareOptionsMenu = function(e) {
	
	var m1a = menu.findItem(1);
	if (m1a != null) {
		var enabled = m1a.isEnabled();
		if (enabled) {
			m1a.title = "Item 1 - Disabled";
		} else {
			m1a.title = "Item 1 - Enabled";
		}
		m1a.setEnabled(!enabled);
	}
};
