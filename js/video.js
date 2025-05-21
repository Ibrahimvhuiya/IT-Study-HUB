document.addEventListener("DOMContentLoaded", () => {
  // Utility to show countdown
  function setupCountdown(dateStr, element, label) {
    const countdownDate = new Date(dateStr).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        element.textContent = `${label}: Live Now 🔴`;
        element.classList.add("live-now");
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      element.textContent = `${label}: Starts in ${hours}h ${minutes}m`;
    };

    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
  }

  // Set countdowns
  const reactLive = document.querySelector('p:has(a[href="live-react.html"])');
  const pythonLive = document.querySelector('p:has(a[href="live-python.html"])');

  if (reactLive) {
    setupCountdown("May 6, 2025 15:00:00", reactLive, "Live Class");
  }

  if (pythonLive) {
    setupCountdown("May 7, 2025 18:00:00", pythonLive, "Live Class");
  }

  // Alert buttons
  const buttons = document.querySelectorAll(".btn, a[href*='live']");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const label = e.target.textContent || e.target.innerText;
      alert(`You clicked: ${label}`);
    });
  });
});
