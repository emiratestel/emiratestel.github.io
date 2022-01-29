// Haptics when link is pressed or released
$("button, a", true).forEach(e => {
    // for each element in the array, add an event listener of the same name
    ["touchstart", "touchend"].forEach(event => {
        e.addEventListener(event, () => { navigator.vibrate(5) });
    });
});


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (i in ca) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return;
}
donateModal = $(".toast.donate")
if (getCookie("donateclosed") !== "true")
    donateModal.classList.add("show")
$(".toast.donate .btn.close").addEventListener("click", () => {
    const date = new Date();
    date.setTime(date.getTime() + (2*24*60*60*1000));
    document.cookie = `donateclosed=true; expires=${date.toUTCString()}; path=/`;
})