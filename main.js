// Theme toggle with local storage
const root = document.documentElement;
const toggleBtn = document.querySelector(".theme-toggle");
const iconSpan = document.querySelector(".theme-icon");

const storedTheme = localStorage.getItem("theme");
if (storedTheme === "light") {
  root.setAttribute("data-theme", "light");
  iconSpan.textContent = "☼";
}

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";

  if (next === "light") {
    root.setAttribute("data-theme", "light");
    iconSpan.textContent = "☼";
  } else {
    root.removeAttribute("data-theme");
    iconSpan.textContent = "☾";
  }
  localStorage.setItem("theme", next);
});

// Dynamic year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Simple print to PDF
const downloadBtn = document.getElementById("download-btn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.print();
  });
}
