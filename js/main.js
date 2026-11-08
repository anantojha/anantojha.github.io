// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle: follows the system until the visitor picks one
const root = document.documentElement;
const btn = document.getElementById("theme");
const effective = () => root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
btn.addEventListener("click", () => {
  const next = effective() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Scroll-spy: mark the nav link for the section in view
const links = [...document.querySelectorAll(".top ul a")];
const sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => {
        const on = a.getAttribute("href") === "#" + e.target.id;
        a.classList.toggle("active", on);
        if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => io.observe(s));
}
