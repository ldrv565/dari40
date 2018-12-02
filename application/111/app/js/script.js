$("document").ready(function() {
	menuToggle();
	modalToggle();
})

function menuToggle() {
	let menuButtonClass = ".opener";
	let menuButtonOnClass = "opener--on";
	let menuButton = $(menuButtonClass);

	let menuClass = ".aside";
	let menuOpenedClass = "aside--opened";
	let menu = $(menuClass);

	let sticksClass = ".icon_sticks";
	let sticks = $(sticksClass);
	let sticksClosingClass = "icon_sticks--closing";

	menuButton.click(function() {
		menuButton.toggleClass(menuButtonOnClass);
		menu.toggleClass(menuOpenedClass);
		$(sticks[0]).toggleClass(sticksClosingClass);
	})
}

function modalToggle() {
	let miniButtonClass = ".card__add_mini_button";
	let miniButton = $(miniButtonClass);

	let modalClass = ".modal";
	let modalHiddenClass = "modal--hidden";
	let modal = $(modalClass);

	miniButton.click(function(e) {
		e.preventDefault();
		modal.toggleClass(modalHiddenClass);
	});
	modal.click(function(e) {
		console.log(e.target.classList);
		if(e.target.classList[0] == "modal" || e.target.classList[0] == "modal__product__close_icon" || e.target.classList[3] == "icon_sticks--modal") {
			modal.toggleClass(modalHiddenClass);
		}
	})

}