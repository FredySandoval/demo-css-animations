let themeOverride=localStorage.getItem("theme");!themeOverride&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(themeOverride="dark"),themeOverride||(themeOverride="light"),document.documentElement.setAttribute("theme",themeOverride);let bool=localStorage.getItem("theme");function setTheme(e){document.body.classList.add("bg-transition"),document.documentElement.setAttribute("theme",e),localStorage.setItem("theme",e)}function handleClick(){bool="light"==bool?"dark":"light","light"!==(document.documentElement.getAttribute("theme")||"light")?(setTheme("light"),console.log("clicked")):setTheme("dark")}!bool&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(bool="dark"),bool||(bool="light");
//# sourceMappingURL=index.2e24ad7f.js.map
