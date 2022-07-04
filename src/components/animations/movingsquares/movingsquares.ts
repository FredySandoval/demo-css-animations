// create a integer variable with a value of 0
let x: number = 0;
// create a function to change the value of x on user scroll
function changeY(): void {
    // create a variable to store the value of the scroll
    let scroll: number = window.scrollY;
    // change the value of x to the value of the scroll
    x = scroll;
    let element: any = document.querySelector(".squares>.layer:nth-child(4)");
    
    if (element !== null ) element.style.webkitFilter = `hue-rotate(${x}deg)`;
}
// add an event listener to the window to call the function on scroll
window.addEventListener("scroll", changeY);