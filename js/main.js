// Haptics when link is pressed or released
$("button, a").mousedown(() => {
    console.log("h")
    navigator.vibrate(3)
}).mouseup(() => {
    console.log("h")
    navigator.vibrate(3)
})