function countdown(endDate) {
  const cakeElement = document.getElementById("cakeContainer");
  const clock1 = document.getElementById("js-clock1");
  const clock2 = document.getElementById("js-clock2");
  const elements = ["days", "hours", "minutes", "seconds"];

  function updateDisplay(timeRemaining) {
    if (timeRemaining <= 0) {
      cakeElement.style.display = "block";
      // clock1.style.display = "block";
      // clock2.style.display = "block";
      return;
    }
    
    elements.forEach(unit => {
      const value = Math.floor(timeRemaining / unitFactors[unit]);
      document.getElementById(`js-${unit}`).textContent = value.toString().padStart(2, '0');
      timeRemaining %= unitFactors[unit];
    });
    
    cakeElement.style.display = "none";
    // clock1.style.display = "none";
    // clock2.style.display = "none";
  }

  const unitFactors = {
    days: 86400,
    hours: 3600,
    minutes: 60,
    seconds: 1
  };

  updateDisplay((endDate - new Date().getTime()) / 1000); // Update display immediately

  setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = Math.floor((endDate - now) / 1000);
    updateDisplay(timeRemaining);
  }, 1000);
}

(function () {
  const endDate = new Date('2024-09-08');
  endDate.setHours(0, 0, 0, 0);
  countdown(endDate);
})();
