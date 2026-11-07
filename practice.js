// PlutoHacks Copilot warm-up
// Type the comments from the README (step 4) below this line, press Enter,
// then press Tab to accept Copilot's gray suggestion.

// function that takes an end date and returns the days, hours, minutes and seconds left until then
function getTimeRemaining(endDate) {
    const total = Date.parse(endDate) - Date.parse(new Date());

    if (total <= 0) {
        return {
            total: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

// format that result as a string like "2d 5h 12m 3s"
function formatTimeRemaining(endDate) {
    const time = getTimeRemaining(endDate);
    return `${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`;
}