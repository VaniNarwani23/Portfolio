const toggle = document.getElementById("modeToggle");
const emoji = document.querySelector(".emoji");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  emoji.textContent = toggle.checked ? "🌞" : "🌙";
});
