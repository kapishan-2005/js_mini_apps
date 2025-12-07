const bulbs = document.querySelectorAll(".bulb");
const btn = document.querySelector("#onbtn");
const btn2 = document.querySelector("#ofbtn");

btn.addEventListener("click", () => {
  bulbs.forEach(b => b.classList.add("on"));
});

btn2.addEventListener("click", () => {
  bulbs.forEach(b => b.classList.remove("on"));
});
