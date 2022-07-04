// This code prevents the “flash of incorrect theme” (FOIT).
let themeOverride: string | null = localStorage.getItem("theme");
if (
  !themeOverride &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) themeOverride = "dark";
if (!themeOverride) themeOverride = "light";
document.documentElement.setAttribute("theme", themeOverride);

let bool: String | null = localStorage.getItem("theme");
if (!bool && window.matchMedia("(prefers-color-scheme: dark)").matches)
  bool = "dark";
if (!bool) bool = "light";

function setTheme(newTheme: string) {
  document.body.classList.add("bg-transition"); // adds a smooth transition, if we add it to body element it creates a flash
  document.documentElement.setAttribute("theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

function handleClick() {
  bool = bool == "light" ? "dark" : "light";
  let theme = document.documentElement.getAttribute("theme") || "light";
  if (theme === "light") {
    setTheme("dark");
    return;
  }
  setTheme("light");
  console.log('clicked');

}