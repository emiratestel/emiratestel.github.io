// Haptics to click while the 404 page shakes
$(document).ready(() => {
    vibrate()
})

div = $(".container.shake")
div.click(() => {
    div.removeClass("shake")

    // needs a delay because otherwise Firefox doesn't repeat the animation
    window.setTimeout(() => {
        window.requestAnimationFrame(() => {
            div.addClass("shake")
            vibrate()
        });
    },1)
})

vibrate = () => {
    navigator.vibrate([5,100,5,100,3,100,2,100,1])
}