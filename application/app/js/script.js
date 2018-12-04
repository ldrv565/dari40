$("document").ready(function() {
    menuToggle();
    modalToggle();
    sortToggle();
    imageAdapt();
    slider()
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

var currentIndex = 0
var sliderLegth = 0

function slider() {
    let $button = $(".gallery__arrow")

    sliderLegth = $(".gallery__image").length

    $button.click(function() {
        if ($(this).hasClass("--left")) {
            if (currentIndex < 1) {
                arrowClick(sliderLegth - 3)
            } else {
                arrowClick(currentIndex - 1)
            }
        } else {
            if (currentIndex > sliderLegth - 4) {
                arrowClick(0)
            } else {
                arrowClick(currentIndex + 1)
            }
        }
    })
}

function arrowClick(i) {
    slide(i)
    currentIndex = i
    console.log(i)
}


function slide(index) {
    let scrollWidth = $(".gallery__image").eq(index)[0].scrollWidth + 5
    $('.gallery__box').animate({
        scrollLeft: scrollWidth * index
    }, 200);
}