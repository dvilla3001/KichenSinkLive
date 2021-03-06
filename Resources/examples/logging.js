setTimeout(function(){
  (function(){
    id = Ti.App.Properties.getString("tisink", "");
    var param, xhr;
    file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,"examples/logging.js");
    text = (file.read()).text
    xhr = Titanium.Network.createHTTPClient();
    xhr.open("POST", "http://tisink.nodester.com/");
    xhr.setRequestHeader("content-type", "application/json");
    param = {
      data: text,
      file: "logging.js",
      id: id
    };
    xhr.send(JSON.stringify(param));
  })();
},0);
//TISINK----------------

var win= Titanium.UI.currentWindow;

var l = Titanium.UI.createLabel({
	text:'Check the log for output',
	width:'auto',
	height:'auto'
});

win.add(l);

// define an object
var obj = {name:'foo', value:'bar'};

Titanium.API.log('ERROR','ERROR MESSAGE FROM FUNCTION - name: ' + obj.name + ' value: ' + obj.value);
Titanium.API.debug('DEBUG MESSAGE FROM FUNCTION - name: ' + obj.name + ' value: ' + obj.value);
Titanium.API.error('ERROR MESSAGE FROM FUNCTION - name: ' + obj.name + ' value: ' + obj.value);
Titanium.API.warn('WARN MESSAGE FROM FUNCTION - name: ' + obj.name + ' value: ' + obj.value);
Titanium.API.info('INFO MESSAGE FROM FUNCTION - name: ' + obj.name + ' value: ' + obj.value);
Titanium.API.trace('TRACE MESSAGE FROM FUNCTION - name: ' + obj.name + ' value: ' + obj.value);
Titanium.API.notice('NOTICE MESSAGE FROM FUNCTION - name: ' + obj.name + ' value: ' + obj.value);
Titanium.API.critical('CRITICAL MESSAGE FROM FUNCTION - name: ' + obj.name + ' value: ' + obj.value);
Titanium.API.info(1);
Titanium.API.info(2);
Titanium.API.info(3);
Titanium.API.info(4);
Titanium.API.info(5);
Titanium.API.info(6);
Titanium.API.info(7);
Titanium.API.info(8);
Titanium.API.info(9);
Titanium.API.info(10);
Titanium.API.info(11);
Titanium.API.info(12);
Titanium.API.info(13);
Titanium.API.info(14);
Titanium.API.info(15);


alert('ALERT LOG FROM FUNCTION - name: ' + obj.name + ' value: ' + obj.value);
