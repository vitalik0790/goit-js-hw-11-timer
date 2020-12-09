// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jan 01, 2021'),
// });

const refs = {
    clockDays: document.querySelector('span[data-value="days"]'),
    clockHours: document.querySelector('span[data-value="hours"]'),
    clockMinutes: document.querySelector('span[data-value="mins"]'),
    clockSecs: document.querySelector('span[data-value="secs"]'),
}

const timer = {
    start() {
        const targetDate = new Date('Jan 01, 2021');


        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = targetDate - currentTime
            updateClockface(deltaTime)
        }, 1000);
    },
};
timer.start();

function updateClockface(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    refs.clockDays.textContent = days;

    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    refs.clockHours.textContent = hours;

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    refs.clockMinutes.textContent = mins;

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.clockSecs.textContent = secs;
}

function pad(value) {
    return String(value).padStart(2, '0');
}