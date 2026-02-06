1function startTest() {
  window.location.hash = "#/test";
}

function showExampleResult() {
  window.location.hash = "#/result/example";
}

function applyTheme(theme) {
  var page = document.querySelector(".page");
  if (!page) {
    return;
  }
  if (theme === "light") {
    page.classList.add("light");
  } else {
    page.classList.remove("light");
  }
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    var icon = toggle.querySelector(".theme-icon");
    var text = toggle.querySelector(".theme-text");
    if (theme === "light") {
      if (icon) icon.textContent = "☀";
      if (text) text.textContent = "Light";
    } else {
      if (icon) icon.textContent = "☾";
      if (text) text.textContent = "Dark";
    }
  }
}

function toggleTheme() {
  var page = document.querySelector(".page");
  if (!page) {
    return;
  }
  var isLight = page.classList.contains("light");
  var nextTheme = isLight ? "dark" : "light";
  applyTheme(nextTheme);
  try {
    localStorage.setItem("theme", nextTheme);
  } catch (e) {
    // Ignore storage errors.
  }
}

(function initTheme() {
  var saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (e) {
    saved = null;
  }
  var prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  var initial = saved || (prefersLight ? "light" : "dark");
  applyTheme(initial);
})();
