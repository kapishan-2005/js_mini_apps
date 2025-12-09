let logoutTimer;
// function to start or reset one timer
function startTimer(){
  clearTimeout(logoutTimer);
  document.getElementById("status").innerHTML="status: Active";
  logoutTimer= setTimeout(()=> {
    document.getElementById("status").innerHTML="status: Logged out due to inactivity";
  },10000);
}
// detect user activity
document.addEventListener("mousemove",startTimer);
document.addEventListener("keydown",startTimer);

startTimer();