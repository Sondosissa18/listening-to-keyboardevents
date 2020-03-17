let boxTop = 200;
let boxLeft = 200;
document.addEventListener("keydown", logKey);

function logKey(e) {
  if (e.keyCode == "38") {
    // up arrow
    boxTop = boxTop - 10;
  } else if (e.keyCode == "40") {
    // down arrow
    boxTop = boxTop + 10;
  } else if (e.keyCode == "37") {
    // left arrow
    boxLeft = boxLeft - 10;
  } else if (e.keyCode == "39") {
    // right arrow
    boxLeft = boxLeft + 10;
  }
  document.getElementById("box").style.top = boxTop + "px";
  document.getElementById("box").style.left = boxLeft + "px";
}

// document.onkeydown = checkKey;

// function checkKey(e) {
//   e = e || window.event;

//   if (e.keyCode == "38") {
//     // up arrow
//   } else if (e.keyCode == "40") {
//     // down arrow
//   } else if (e.keyCode == "37") {
//     // left arrow
//   } else if (e.keyCode == "39") {
//     // right arrow
//   }
// }
