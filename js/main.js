// Haptics when link is pressed or released
$("button, a").mousedown(() => {
    console.log("h")
    navigator.vibrate(5)
}).mouseup(() => {
    console.log("h")
    navigator.vibrate(5)
})