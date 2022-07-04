function addClass(element: HTMLElement, className: string): void {
    if (element.classList) element.classList.add(className);
    else element.className += ` ${className}`;
}
function removeClass(element: HTMLElement, className: string): void {
    if (element.classList) element.classList.remove(className);
    else element.className = element.className.replace(new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'), ' ');
}
function checkClassNameExists(el: HTMLElement, className: string): boolean {
    return el.className.indexOf(className) !== -1;
}
function toggleClass(el: HTMLElement, className: string): void {
    console.log(checkClassNameExists(el, className));
    if (checkClassNameExists(el, className)) {
        removeClass(el, className);
    } else {
        addClass(el, className);
    }
}