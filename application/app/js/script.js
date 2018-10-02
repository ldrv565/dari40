$("document").ready(function() {
	menuToggle();
})

function menuToggle() {
	let menuButtonClass = ".opener";
	let menuButtonOnClass = "opener--on";
	let menuButton = $(menuButtonClass);

	let menuClass = ".aside";
	let menuOpenedClass = "aside--opened";
	let menu = $(menuClass);

	let sticksClass = ".opener__sticks";
	let sticks = $(sticksClass);
	let sticksClosingClass = "opener__sticks--closing";

	menuButton.click(function() {
		menuButton.toggleClass(menuButtonOnClass);
		menu.toggleClass(menuOpenedClass);
		sticks.toggleClass(sticksClosingClass);
	})
}