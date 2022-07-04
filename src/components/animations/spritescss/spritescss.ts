// from p5.js
let constrain = (n: number, low: number, high: number): number => {
    return Math.max(Math.min(n, high), low);
};

type n = number;
let map = (
    n: number,
    start1: number,
    stop1: number,
    start2: number,
    stop2: number,
    withinBounds?: number
): number => {
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

let normal = (): void => {
    let scroll = window.scrollY;
    let s = Math.abs((scroll % 200) - 100) - 100;
    let s2 = Math.abs(Math.floor(map(s, 0, 100, 0,8)));
    const docEle: HTMLElement = document.querySelector('#sprite-container');

    docEle.style.backgroundPosition = `-${s2 * 400}px`;
}
// add an event listener to the window to call the function on scroll
window.addEventListener("scroll", normal)