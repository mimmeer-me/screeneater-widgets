function updateLock() {
  let time = document.getElementById("lockscreen-d623544d");
  time.innerHTML = getTimeHM();
}

function getTimeHM() {
  let date = new Date();
  return date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0");
}

updateLock();

setInterval(updateLock, 1000);