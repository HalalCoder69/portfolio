function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const icon = document.getElementById("theme-icon");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
}
