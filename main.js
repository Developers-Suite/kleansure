const countdownDate = new Date("2025-12-31T00:00:00").getTime();

const interval = setInterval(function() {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

  if (timeLeft < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerText = "EXPIRED";
  }
}, 1000);


// Toggle Mobile Menu
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
