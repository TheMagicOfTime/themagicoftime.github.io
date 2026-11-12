// HTTP servers resolve /main/ to /main/index.html. Local file browsing needs
// the explicit filename; keep the same static pages usable by double-click.
if (window.location.protocol === "file:") {
  for (const link of document.querySelectorAll('a[href$="/"]')) {
    link.setAttribute("href", `${link.getAttribute("href")}index.html`);
  }
}
