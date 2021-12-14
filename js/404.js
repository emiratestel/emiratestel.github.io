// Haptics to click while the 404 page shakes
$(document).ready(() => {
    vibrate()
})

div = $(".container.shake")
div.click(() => {
    div.removeClass("shake")
    window.requestAnimationFrame(function() {
        div.addClass("shake")
        vibrate()
    });
})

vibrate = () => {
    // on Firefox Mobile or other unsupported browsers this not working
    // should hopefully not break the animation repeat function
    try {
        navigator.vibrate([5,100,5,100,3,100,2,100,1])
    } catch(e) {
        console.log(`Vibration likely unsupported\n${e}`)
    }
}