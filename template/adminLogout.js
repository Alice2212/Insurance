const logoutAdmin = document.getElementById("logoutAdmin");

logoutAdmin.addEventListener("click", () => {
  window.localStorage.clear();
  window.location.reload(true);
  window.location.replace("./login.html");
});
