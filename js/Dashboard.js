document.addEventListener("DOMContentLoaded", function () {
  // Greeting based on time of day
  const greetingElement = document.querySelector(".dashboard-container h2");
  const hour = new Date().getHours();

  let greeting = "Welcome to your IT Study Hub Dashboard!";
  if (hour < 12) {
    greeting = "Good morning! Ready to learn?";
  } else if (hour < 18) {
    greeting = "Good afternoon! Keep up the good work!";
  } else {
    greeting = "Good evening! Let's wrap up strong!";
  }

  if (greetingElement) {
    greetingElement.textContent = greeting;
  }

  // Animate progress bars
  const progressFills = document.querySelectorAll(".progress-fill");

  progressFills.forEach((fill) => {
    const width = fill.style.width;
    fill.style.width = "0"; // Reset first

    setTimeout(() => {
      fill.style.transition = "width 1s ease-in-out";
      fill.style.width = width;
    }, 200);
  });

  // Optional: Clickable card effect
  const cards = document.querySelectorAll(".dashboard-card");

  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.02)";
      card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
  });
});
