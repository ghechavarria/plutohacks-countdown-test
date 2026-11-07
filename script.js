const startDate = new Date("2026-11-06T19:00:00");
const endDate = new Date("2026-11-07T18:00:00");

const heading = document.getElementById("countdown-heading");
const countdownEl = document.querySelector(".countdown");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const themeToggle = document.getElementById("theme-toggle");
const themeStorageKey = "plutohacks-theme";

function setTheme(theme) {
  const isLight = theme === "light";
  document.documentElement.dataset.theme = isLight ? "light" : "dark";
  themeToggle.textContent = isLight ? "Dark theme" : "Light theme";
  themeToggle.setAttribute(
    "aria-label",
    `Switch to ${isLight ? "dark" : "light"} theme`
  );
}

const savedTheme = localStorage.getItem(themeStorageKey);
setTheme(savedTheme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "light" ? "dark" : "light";
  setTheme(nextTheme);
  localStorage.setItem(themeStorageKey, nextTheme);
});

let timerId = null;

function getTimeRemaining(targetDate) {
  const total = Math.max(Date.parse(targetDate) - Date.now(), 0);

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

function showFinalState() {
  clearInterval(timerId);
  countdownEl.classList.add("hidden");
  heading.textContent = "Hacking is over! Submit your project";
  heading.classList.add("final-message");
}

function updateCountdown() {
  const now = new Date();

  if (now < startDate) {
    heading.textContent = "Hacking starts in";
    heading.classList.remove("final-message");
    countdownEl.classList.remove("hidden");

    const remaining = getTimeRemaining(startDate);
    daysEl.textContent = String(remaining.days).padStart(2, "0");
    hoursEl.textContent = String(remaining.hours).padStart(2, "0");
    minutesEl.textContent = String(remaining.minutes).padStart(2, "0");
    secondsEl.textContent = String(remaining.seconds).padStart(2, "0");
    return;
  }

  if (now < endDate) {
    heading.textContent = "Hacking ends in";
    heading.classList.remove("final-message");
    countdownEl.classList.remove("hidden");

    const remaining = getTimeRemaining(endDate);
    daysEl.textContent = String(remaining.days).padStart(2, "0");
    hoursEl.textContent = String(remaining.hours).padStart(2, "0");
    minutesEl.textContent = String(remaining.minutes).padStart(2, "0");
    secondsEl.textContent = String(remaining.seconds).padStart(2, "0");
    return;
  }

  showFinalState();
}

updateCountdown();
timerId = setInterval(updateCountdown, 1000);
