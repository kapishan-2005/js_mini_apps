const countDisplay = document.querySelector("#count");
const increasebtn = document.querySelector("#increase");
const decreasebtn = document.querySelector("#decrease");
const resetbtn = document.querySelector("#reset");

let count=0;

increasebtn.addEventListener("click",() =>{
count++;
countDisplay.innerText = count;
});

decreasebtn.addEventListener("click",() =>{
count--;
countDisplay.innerText = count;
});

resetbtn.addEventListener("click",() =>{
count = 0;
countDisplay.innerText = count;
});