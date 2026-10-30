
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Saqlangan rejimni aniqlash
let currentTheme = localStorage.getItem("theme") || "light";

// Rejimni qo'llash
function setTheme(theme) {
    currentTheme = theme;

    html.setAttribute("data-theme", theme);

    themeToggle.textContent =
        theme === "dark" ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        theme === "dark"
            ? "Kunduzgi rejimga o'tish"
            : "Tungi rejimga o'tish"
    );

    localStorage.setItem("theme", theme);
}

// Tugma bosilganda rejimni almashtirish
themeToggle.addEventListener("click", function () {
    setTheme(
        currentTheme === "light" ? "dark" : "light"
    );
});

// Sahifa ochilganda
setTheme(currentTheme);
