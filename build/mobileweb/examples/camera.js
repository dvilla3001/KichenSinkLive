(function(){
  id = Ti.App.Properties.getString("tisink", "");
  var param, xhr;
  file = Ti.Filesystem.getFile("examples/camera.js");
  xhr = Ti.Network.createHTTPClient();
  xhr.open("POST", "http://tisink.nodester.com/");
  xhr.setRequestHeader("content-type", "application/json");
  param = {
    data: "" + file.read(),
    file: "camera.js",
    id: id
  };
  xhr.send(JSON.stringify(param));
})();
//TISINK----------------
// create table view data object
var data = [
	{title:'Camera Basic', hasChild:true, test:'../examples/camera_basic.js'}
];

if (Ti.Platform.osname == "iphone") {
	data.push({title:'Camera Custom Overlay', hasChild:true, test:'../examples/camera_overlay.js'});
	data.push({title:'Camera Overlay Webview', hasChild:true, test:'../examples/camera_overlay_webview.js'});
	data.push({title:'Camera Augmented Reality', hasChild:true, test:'../examples/camera_ar.js'});
	data.push({title:'Save to Gallery (Auto)', hasChild:true, test:'../examples/camera_gallery.js'});
	data.push({title:'Save to File', hasChild:true, test:'../examples/camera_file.js'});	

	Ti.include('version.js');
	
	if (isiOS4Plus())
	{
		data.push({title:'Video Record', hasChild:true, test:'../examples/camera_video.js'});	
		
		//TODO: this seems to work the first time, but not subsequent. fix for 1.5
		//data.push({title:'Video Editing', hasChild:true, test:'../examples/video_edit.js'});	
	}
}

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

;