document.addEventListener("DOMContentLoaded", function () {
  // Create subject filter dropdown dynamically
  const subjectFilter = document.createElement("select");
  subjectFilter.id = "note-subject-filter";

  subjectFilter.innerHTML = `
    <option value="all">All Subjects</option>
    <option value="Web Development">Web Development</option>
    <option value="Backend Development">Backend Development</option>
  `;

  const h2 = document.querySelector("h2");
  h2.insertAdjacentElement("afterend", subjectFilter);

  // Filter logic
  subjectFilter.addEventListener("change", function () {
    const selected = this.value;
    const noteCards = document.querySelectorAll(".note-card");

    noteCards.forEach((card) => {
      const subjectText = card.querySelector("p").textContent;

      if (selected === "all" || subjectText.includes(selected)) {
        card.style.display = "flex";
        card.classList.add("fade-in");
      } else {
        card.style.display = "none";
      }
    });
  });

  // Add a simple fade-in animation
  const style = document.createElement("style");
  style.textContent = `
    .fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
});
