var args = arguments[0] || {};

init();

function init() {
	
    $.header.setTitle("AIR App VLC"); 
    $.header.headerTitle.setColor("white");
    $.header.setLeftButton(undefined);
    $.header.setRightButton("\ue602");
}

$.leftIcon.addEventListener('singletap', function(){
	$.win.close();
	$.win.animate({
		left : "100%"
	});
});

var rightButton = $.header.getRightButton();

rightButton.addEventListener('singletap', function(){
	var next = Alloy.createController("info1");
	next = next.getView();
	next.open();
	next.animate({top : 0});
});

$.picker.addEventListener('singletap', function(){
	var next = Alloy.createController("lista");
	next = next.getView();
	next.open();
	next.animate({top : 0});
});
