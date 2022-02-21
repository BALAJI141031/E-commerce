let toggleBtn = document.querySelector(".dark-light-btn");
const userMode = localStorage.getItem("mode");
if (userMode === null) {
  localStorage.setItem("mode", "Light");
} else {
  if (userMode === "Dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleBtn.innerHTML = `<i class="fas fa-adjust header-icons header-icons-m-lr">Light</i>`;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleBtn.innerHTML = `<i class="fas fa-moon header-icons header-icons-m-lr">Dark</i>`;
  }
}

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.innerText === "Dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleBtn.innerHTML = `<i class="fas fa-adjust header-icons header-icons-m-lr">Light</i>`;
    localStorage.setItem("mode", "Dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleBtn.innerHTML = `<i class="fas fa-moon header-icons header-icons-m-lr">Dark</i>`;
    localStorage.setItem("mode", "Light");
  }
});
