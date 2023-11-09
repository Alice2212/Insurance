const logoutAgent = document.getElementById("logoutAgent");

logoutAgent.addEventListener("click", () => {
  window.localStorage.clear();
  window.location.reload(true);
  window.location.replace("./index.html");
});


