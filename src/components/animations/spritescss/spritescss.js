// from p5.js
let constrain = function (n, low, high) {
    return Math.max(Math.min(n, high), low);
};


let map = function (n, start1, stop1, start2, stop2, withinBounds) {
    const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    if (!withinBounds) {
        return newval;
    }
    if (start2 < stop2) {
        return constrain(newval, start2, stop2);
    } else {
        return constrain(newval, stop2, start2);
    }
};
let n = 0;
let dir = 1;
function normal() {
    let scroll = window.scrollY;

    let s = Math.abs((scroll % 200) - 100) - 100;
    let s2 = Math.abs(Math.floor(map(s, 0, 100, 0,8)));
    
    document.querySelector('#sprite-container').style.backgroundPosition = `-${s2 * 400}px`;
}
// add an event listener to the window to call the function on scroll
window.addEventListener("scroll", normal)