var args = arguments[0] || {};

init();

function init() {
	
    $.header.setTitle("Selecciona la calle"); 
    $.header.headerTitle.setColor("white");
    $.header.setLeftButton("\ue604");
    $.header.setRightButton("\ue605");

}

var rightButton = $.header.getRightButton();
 
rightButton.addEventListener('singletap', function(){
	 $.win.close();
	 $.win.animate({
	 top : "100%"
	 });
});

var leftButton = $.header.getLeftButton();

leftButton.addEventListener('singletap', function(){
	$.win.close();
	$.win.animate({
		top : "100%"
	});
});

$.list.addEventListener('singletap', function(){
	var next = Alloy.createController("ejemplo2");
	next = next.getView();
	next.open();
	next.animate();
});
