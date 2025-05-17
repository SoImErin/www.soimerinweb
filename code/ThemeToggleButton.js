document.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
});
