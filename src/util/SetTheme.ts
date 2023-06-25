export default function setTheme(state: boolean) {
  document
    .querySelector("html")
    ?.setAttribute("data-theme", state ? "dark" : "business");
}
