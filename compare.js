// Slider extracted from task-188 (884f4d6c), independent of page navigation.
for (const stage of document.querySelectorAll(".compare__stage")) {
  const range = stage.querySelector(".compare__range");

  function setPosition(value) {
    const position = Math.max(0, Math.min(100, value));
    range.value = position;
    stage.style.setProperty("--pos", `${range.value}%`);
    range.setAttribute("aria-valuetext", `${range.value}% оригинала, ${100 - range.value}% перевода`);
  }

  range.hidden = false;
  setPosition(Number(range.value));
  range.addEventListener("input", () => setPosition(Number(range.value)));

  function fromPointer(event) {
    const rect = stage.getBoundingClientRect();
    setPosition(((event.clientX - rect.left) / rect.width) * 100);
  }

  let pointerId = null;
  stage.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    pointerId = event.pointerId;
    stage.setPointerCapture(pointerId);
    stage.classList.add("is-dragging");
    range.focus({ preventScroll: true });
    fromPointer(event);
    event.preventDefault();
  });
  stage.addEventListener("pointermove", (event) => {
    if (event.pointerId === pointerId) fromPointer(event);
  });
  function stopDragging() {
    pointerId = null;
    stage.classList.remove("is-dragging");
  }
  stage.addEventListener("pointerup", stopDragging);
  stage.addEventListener("pointercancel", stopDragging);
  stage.addEventListener("lostpointercapture", stopDragging);
}
