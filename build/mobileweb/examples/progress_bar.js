(function(){
  id = Ti.App.Properties.getString("tisink", "");
  var param, xhr;
  file = Ti.Filesystem.getFile("examples/progress_bar.js");
  xhr = Ti.Network.createHTTPClient();
  xhr.open("POST", "http://tisink.nodester.com/");
  xhr.setRequestHeader("content-type", "application/json");
  param = {
    data: "" + file.read(),
    file: "progress_bar.js",
    id: id
  };
  xhr.send(JSON.stringify(param));
})();
//TISINK----------------
var win = Ti.UI.currentWindow;

var flexSpace = Ti.UI.createButton({
	systemButton:Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var b = Ti.UI.createButton({
	title:'Start Progress',
	height:40,
	width:200,
	top:10
});

//
// BUTTON LISTENER TO KICK OFF PROGRESS BARS
//
b.addEventListener('click', function()
{
	ind.show();
	ind2.show();
	ind3.show();
	ind4.show();

	var val = 0;
	var interval = setInterval(function()
	{
		Ti.API.info('INTERVAL FIRED value ' + val);
		if (val == 11)
		{
			clearInterval(interval);
			ind.hide();
			ind2.hide();
			ind3.hide();
			ind4.hide();
			win.setToolbar(null,{animated:true});
			win.setTitleControl(null);
			win.setTitle('Progress Bar');
			return;
		}
		ind.value = val;
		ind.message = 'Downloading ' + val + ' of 10';
		ind2.value = val;
		ind2.message = 'Downloading ' + val + ' of 10';
		ind3.value = val;
		ind3.message = 'Downloading ' + val + ' of 10';
		ind4.value = val;
		ind4.message = 'Downloading ' + val + ' of 10';

		val++;

	},1000);
});


//
// PLAIN STYLE INDICATOR
//
var ind=Ti.UI.createProgressBar({
	width:150,
	min:0,
	max:10,
	value:0,
	height:70,
	color:'#888',
	message:'Downloading 0 of 10',
	font:{fontSize:14, fontWeight:'bold'},
	style:Ti.UI.iPhone.ProgressBarStyle.PLAIN,
	top:60
});


//
// BAR STYLE INDICATOR
//
var ind2=Ti.UI.createProgressBar({
	width:200,
	min:0,
	max:10,
	value:0,
	height:70,
	color:'#888',
	message:'Downloading 0 of 10',
	font:{fontSize:14, fontWeight:'bold'},
	style:Ti.UI.iPhone.ProgressBarStyle.BAR,
	top:120
});


//
// PLACE INDICATOR IN NAV BAR
//
var ind3=Ti.UI.createProgressBar({
	width:100,
	min:0,
	max:10,
	value:0,
	color:'#fff',
	message:'Downloading 0 of 10',
	font:{fontSize:14, fontWeight:'bold'},
	style:Ti.UI.iPhone.ProgressBarStyle.PLAIN
});

//
// PLACE INDICATOR IN TOOLBAR
//
var ind4=Ti.UI.createProgressBar({
	width:250,
	min:0,
	max:10,
	value:0,
	color:'#fff',
	message:'Downloading 0 of 10',
	font:{fontSize:14, fontWeight:'bold'},
	style:Ti.UI.iPhone.ProgressBarStyle.PLAIN
});

if (Ti.Platform.name == 'iPhone OS')
{
	win.add(b);
	win.add(ind);
	win.add(ind2);
	win.setTitleControl(ind3);
	win.setToolbar([flexSpace,ind4,flexSpace]);
}

// create Android Progress Indicator
else
{
	var value = 0;
	win.title = 'Starting...';
	// create indicator
	var ind = Ti.UI.createActivityIndicator({
		location:Ti.UI.ActivityIndicator.DIALOG,
		type:Ti.UI.ActivityIndicator.DETERMINANT,
		message:'Downloading 0 of 10',
		min:0,
		max:10,
		value:0
	});

	ind.show();

    var interval = setInterval(function()
    {
		value += 2;
		ind.setValue(value);
		ind.setMessage('Downloading ' + value + ' of 10');
		if (value == 10)
		{
			clearInterval(interval);
			ind.hide();
			win.setTitle('Progress Bar');
		}
     },1000);
}
;