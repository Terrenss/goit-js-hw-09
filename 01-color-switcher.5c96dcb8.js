!function(){var t={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")},e=null;t.stop.setAttribute("disabled",!0),t.start.addEventListener("click",(function(){t.start.setAttribute("disabled",!0),t.stop.removeAttribute("disabled"),e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.5c96dcb8.js.map
