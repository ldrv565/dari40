$("document").ready(function() {
    menuToggle();
    modalToggle();
    sortToggle();
    if (window.location.href === "http://localhost:3000/index.html") {
        imageAdapt();
    }
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
        if (e.target.classList[0] == "modal" || e.target.classList[0] == "modal__product__close_icon" || e.target.classList[3] == "icon_sticks--modal") {
            modal.toggleClass(modalHiddenClass);
        }
    })

}

function imageAdapt() {
    let $window = $(window)
    let $body = $("body")

    let imageUrl = $body.css('background-image')
    imageUrl = imageUrl.match(/^url\("?(.+?)"?\)$/)

    let image = new Image()
    if (imageUrl[1]) {
        imageUrl = imageUrl[1]
        var dfd = new $.Deferred()
        if (imageUrl) {
            image.onload = dfd.resolve
            image.onerror = dfd.reject
            image.src = imageUrl
        } else {
            dfd.reject()
        }
    }
    changeBackgroundSize($window, image)
    $window.resize(function() {
        changeBackgroundSize($window, image)
    });
}

function changeBackgroundSize($window, image) {
    let imageAspectRatio = image.width / image.height
    let windowAspectRatio = $window.width() / $window.height()
    if (windowAspectRatio < imageAspectRatio) {
        $("body").css("background-size", "auto " + 100 + "vh")
    } else {
        $("body").css("background-size", "100% " + "auto")
    }
}

function sortToggle() {
    $sort = $(".nav_panel");
    $sortList = $(".nav_panel__box")
    $sort.click(function() {
        $sortList.toggleClass("--opened")
    })
}