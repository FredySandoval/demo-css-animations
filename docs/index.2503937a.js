function addClass(s,a){s.classList?s.classList.add(a):s.className+=` ${a}`}function removeClass(s,a){s.classList?s.classList.remove(a):s.className=s.className.replace(new RegExp(`(^|\\b)${a.split(" ").join("|")}(\\b|$)`,"gi")," ")}function checkClassNameExists(s,a){return-1!==s.className.indexOf(a)}function toggleClass(s,a){console.log(checkClassNameExists(s,a)),checkClassNameExists(s,a)?removeClass(s,a):addClass(s,a)}
//# sourceMappingURL=index.2503937a.js.map