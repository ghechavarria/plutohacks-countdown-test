const startDate = new Date("2026-11-06T19:00:00");
const endDate = new Date("2026-11-07T18:00:00");

const heading = document.getElementById("countdown-heading");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function getTimeRemaining(targetDate) {
  const total = Math.max(Date.parse(targetDate) - Date.now(), 0);

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

function updateCountdown() {
  const now = new Date();

  if (now < startDate) {
    heading.textContent = "Hacking starts in";
    const remaining = getTimeRemaining(startDate);
    daysEl.textContent = String(remaining.days).padStart(2, "0");
    hoursEl.textContent = String(remaining.hours).padStart(2, "0");
    minutesEl.textContent = String(remaining.minutes).padStart(2, "0");
    secondsEl.textContent = String(remaining.seconds).padStart(2, "0");
    return;
  }

  if (now < endDate) {
    heading.textContent = "Hacking ends in";
    const remaining = getTimeRemaining(endDate);
    daysEl.textContent = String(remaining.days).padStart(2, "0");
    hoursEl.textContent = String(remaining.hours).padStart(2, "0");
    minutesEl.textContent = String(remaining.minutes).padStart(2, "0");
    secondsEl.textContent = String(remaining.seconds).padStart(2, "0");
    return;
  }

  heading.textContent = "Hacking is underway";
  daysEl.textContent = "00";
  hoursEl.textContent = "00";
  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
}

updateCountdown();
setInterval(updateCountdown, 1000);
