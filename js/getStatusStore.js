const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const day = date.getDay();

var time = document.getElementById("statusStore");

if (day == 0) {
  document.getElementById("statusStore").innerText = "Closed";
  document.getElementById("statusStore").style = "color:red;";
} else if (hours > 18) {
  document.getElementById("statusStore").innerText = "Closed";
  document.getElementById("statusStore").style = "color:red;";
} else {
  document.getElementById("statusStore").innerText = "Opened";
  document.getElementById("statusStore").style = "color:green;";
}

console.log(date);
