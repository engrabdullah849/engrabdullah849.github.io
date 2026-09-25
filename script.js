document.addEventListener("DOMContentLoaded", () => {
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) setTimeout(() => target.scrollIntoView(), 50);
  }
});
