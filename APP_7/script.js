const paras = document.getElementsByTagName("p");
const highlightBtn = document.getElementById("heighlightbtn");
const clearBtn = document.getElementById("clearbtn");

highlightBtn.onclick = () => {
  for (let p of paras) {
    p.classList.add("highlighted");
  }
};

clearBtn.onclick = () => {
  for (let p of paras) {
    p.classList.remove("highlighted");
  }
};
