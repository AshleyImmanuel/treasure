// ================================
//  SPLENDORE - EVENT COUNTDOWN
//  Event Date: 28 Nov, 10:00 AM
// ================================

// Set countdown target date & time
const targetDate = new Date("Nov 28, 2025 10:00:00").getTime();
// If event is THIS year, use:
// const targetDate = new Date("Nov 28, 2024 10:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) return; // safety check

    if (diff <= 0) {
        countdownElement.className = "countdown-timer countdown-final";
        countdownElement.innerHTML = "THE TREASURE HUNT HAS BEGUN! 🥳";

        clearInterval(window.countdownInterval);
        return;
    }

    countdownElement.className = "countdown-timer";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (t) => (t < 10 ? `0${t}` : t);

    countdownElement.innerHTML =
        `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

// Run & refresh every second
window.countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
