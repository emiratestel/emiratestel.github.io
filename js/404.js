// Haptics to click while the 404 page shakes
$(document).ready(() => {
    navigator.vibrate([5,95,5,95,3,97,2,98,1])
})

div = $(".container.shake")
div.click(() => {
    div.removeClass("shake")
    window.requestAnimationFrame(function() {
        div.addClass("shake")
        // on Firefox Mobile or other unsupported browsers this not working
        // should hopefully not break the animation repeat function
        try {
            navigator.vibrate([5,100,5,100,3,100,2,100,1])
        }
    });
})