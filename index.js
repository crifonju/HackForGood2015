$.index.open();


init();

function init() {
	
    $.header.setTitle("AIR App VLC"); 
    $.header.headerTitle.setColor("white");
    $.header.setLeftButton(undefined);
    $.header.setRightButton("\ue602");
}

$.rightIcon.addEventListener('singletap', function(){
	var next = Alloy.createController("numbers");
	next = next.getView();
	next.open();
	next.animate();
});

var rightButton = $.header.getRightButton();

rightButton.addEventListener('singletap', function(){
	var next = Alloy.createController("info1");
	next = next.getView();
	next.open();
	next.animate({top : 0});
});
