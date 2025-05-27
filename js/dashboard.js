// Check stored assignment submission status on load
document.addEventListener("DOMContentLoaded", () => {
  const submitted = JSON.parse(localStorage.getItem("submittedAssignments") || "{}");
  document.querySelectorAll(".status").forEach(span => {
    const id = span.dataset.id;
    if (submitted[id]) {
      span.textContent = "✅ Assignment Submitted";
      const btn = span.nextElementSibling;
      btn.style.display = "none";
    } else {
      span.textContent = "❌ Not Submitted";
    }
  });

  // Load course progress
  updateAllProgressBars();

  // Show last updated time
  const lastUpdate = localStorage.getItem("lastUpdated");
  if (lastUpdate) {
    document.getElementById("last-update-time").textContent = "Last updated: " + lastUpdate;
  }

  // Calculate and show total progress
  updateTotalProgress();
});

function submitAssignment(id) {
  const fileInput = document.querySelector(`input[type='file'][onchange*="${id}"]`);
  fileInput.click();
}

function handleUpload(id, input) {
  if (!input.files.length) return;

  const file = input.files[0];
  const submitted = JSON.parse(localStorage.getItem("submittedAssignments") || "{}");
  submitted[id] = file.name;
  localStorage.setItem("submittedAssignments", JSON.stringify(submitted));

  const span = document.querySelector(`.status[data-id="${id}"]`);
  span.textContent = "✅ Assignment Submitted";

  const btn = span.nextElementSibling;
  btn.style.display = "none";
}

// Update progress bars from localStorage
function updateAllProgressBars() {
  const courses = ['html', 'css', 'js', 'python'];

  courses.forEach(course => {
    const progress = parseInt(localStorage.getItem(`${course}_progress`)) || 0;
    const fill = document.getElementById(`${course}-progress`);
    if (fill) {
      fill.style.width = `${progress}%`;
      fill.textContent = `${progress}%`;
    }
  });
}

// Reset specific course progress
function resetProgress(course) {
  localStorage.setItem(`${course}_progress`, "0");
  updateAllProgressBars();
  updateTotalProgress();
  updateLastUpdatedTime();
}

// Update total progress percentage
function updateTotalProgress() {
  const courses = ['html', 'css', 'js', 'python'];
  let total = 0;

  courses.forEach(course => {
    total += parseInt(localStorage.getItem(`${course}_progress`)) || 0;
  });

  const avg = Math.round(total / courses.length);
  const totalProgress = document.getElementById("total-progress");
  if (totalProgress) {
    totalProgress.textContent = `${avg}%`;
  }
}

// Update last update timestamp
function updateLastUpdatedTime() {
  const now = new Date();
  const timeStr = now.toLocaleString(); // Ex: 27/05/2025, 3:42:10 PM
  localStorage.setItem("lastUpdated", timeStr);

  const label = document.getElementById("last-update-time");
  if (label) {
    label.textContent = "Last updated: " + timeStr;
  }
}
