const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const digitalClock = document.getElementById('digital-clock');

function updateClock() {
  const now = new Date();
  
  // Analog clock calculations
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  
  const secondDeg = seconds * 6; // 360 / 60
  const minuteDeg = minutes * 6 + seconds * 0.1; // smooth minute
  const hourDeg = hours * 30 + minutes * 0.5; // smooth hour
  
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  
  // Digital clock
  const hourStr = hours.toString().padStart(2, '0');
  const minStr = minutes.toString().padStart(2, '0');
  const secStr = seconds.toString().padStart(2, '0');
  
  digitalClock.textContent = `${hourStr}:${minStr}:${secStr}`;
}

// Update every second
setInterval(updateClock, 1000);

// Initialize immediately
updateClock();
