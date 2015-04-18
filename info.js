var args = arguments[0] || {};


init();

function init() {
	
    $.header.setTitle("AIRE App VLC Info"); 
    $.header.headerTitle.setColor("white");
    $.header.setLeftButton("\ue604");
    $.header.setRightButton(undefined);
}

// $.leftIcon.addEventListener('singletap', function(){
	// $.win.close();
	// $.win.animate({
		// left : "100%"
	// });
// });

var leftButton = $.header.getLeftButton();

leftButton.addEventListener('singletap', function(){
	$.win.close();
	$.win.animate({
		top : "100%"
	});
});
