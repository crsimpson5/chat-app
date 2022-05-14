const messages = Array.from(document.querySelectorAll(".animate"));

function loadMessage(el, delay) {
  setTimeout(() => {
    el.classList.add("active");
    el.style.maxHeight = el.scrollHeight + "px";
  }, delay);
}

loadMessage(messages.shift(), 1000);
loadMessage(messages.shift(), 3000);
loadMessage(messages.shift(), 4500);
loadMessage(messages.shift(), 4750);
