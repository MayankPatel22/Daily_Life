function updateclock() {
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minute}:${second} ${meridian}`;
    document.getElementById("clock").textContent = timeString;
}

updateclock();
setInterval(updateclock, 1000);