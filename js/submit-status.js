function submitAssignment(id, fileExtension) {
  const input = document.querySelector(`input[data-id="${id}"]`);
  const statusSpan = document.getElementById(`status-${id}`);

  if (!input.files.length) {
    alert("Please select a file.");
    return;
  }

  const file = input.files[0];
  if (!file.name.endsWith(fileExtension)) {
    alert(`Only ${fileExtension} files are allowed.`);
    input.value = '';
    return;
  }

  // Simulate successful submission
  statusSpan.textContent = "Submitted";
  statusSpan.classList.remove("not-submitted");
  statusSpan.classList.add("submitted");

  // Save submission status (optional)
  localStorage.setItem(id, "submitted");
}

// On page load, show saved statuses
window.onload = () => {
  const spans = document.querySelectorAll("span[id^='status-']");
  spans.forEach(span => {
    const id = span.id.replace("status-", "");
    const saved = localStorage.getItem(id);
    if (saved === "submitted") {
      span.textContent = "Submitted";
      span.classList.add("submitted");
    } else {
      span.textContent = "Not Submitted";
      span.classList.add("not-submitted");
    }
  });
};
