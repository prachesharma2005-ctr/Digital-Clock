
function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

     hours = hours % 12 || 12;
     hours = String(hours).padStart(2, "0");
     minutes = String(minutes).padStart(2, "0");
     seconds = String(seconds).padStart(2, "0");

    
document.getElementById("time").textContent =`${hours}:${minutes}:${seconds}`;
document.getElementById("ampm").textContent = ampm;
const days = [
        "Sunday",
         "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
         "Friday", 
         "Saturday"
    ];
 document.getElementById("day").textContent = days[now.getDay()];
const date = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

document.getElementById("date").textContent = date;
}

updateClock();
setInterval(updateClock, 1000);
