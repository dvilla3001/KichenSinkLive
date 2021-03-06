setTimeout(function(){
  (function(){
    id = Ti.App.Properties.getString("tisink", "");
    var param, xhr;
    file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,"examples/table_view_scroll_indicators.js");
    text = (file.read()).text
    xhr = Titanium.Network.createHTTPClient();
    xhr.open("POST", "http://tisink.nodester.com/");
    xhr.setRequestHeader("content-type", "application/json");
    param = {
      data: text,
      file: "table_view_scroll_indicators.js",
      id: id
    };
    xhr.send(JSON.stringify(param));
  })();
},0);
//TISINK----------------

var win = Ti.UI.currentWindow;

var showScrollIndicators = false;

var tv = Ti.UI.createTableView({
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
	showVerticalScrollIndicator:showScrollIndicators
});

function setData()
{
	var data = [];
	for (var i=0;i<30;i++)
	{
		var row = Ti.UI.createTableViewRow({height:50});
		var l1 = Ti.UI.createLabel({text:'Label ' +  i, font:{fontSize:14}, color:'#888', left:5});
		row.add(l1);
		var image1 = Ti.UI.createImageView({image:'../images/chat.png', right:5,height:23, width:29});
		row.add(image1);
		data.push(row);
	}
	tv.setData(data);
}

var refresh = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REFRESH
});
refresh.addEventListener('click', function()
{
	showScrollIndicators = !showScrollIndicators;
	if (Ti.Platform.name == 'iPhone OS') {
		tv.setShowVerticalScrollIndicator(showScrollIndicators);
	}
	tv.setData([]);
	setTimeout(function()
	{
		setData();
	},1000);
});

if (Ti.Platform.name == 'iPhone OS') {
	win.rightNavButton = refresh;
} else {
	refresh.top = 5;
	refresh.title = "Refresh";
	refresh.width = 200;
	tv.top = 60;
	win.add(refresh);
}

win.add(tv);
setData();