// Haptics when link is pressed or released
$("button a").mousedown(() => {
    navigator.vibrate(5)
}).mouseup(() => {
    navigator.vibrate(5)
})