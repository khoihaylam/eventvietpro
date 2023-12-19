let so1 = document.getElementById("so-1");
console.log(so1);
let so2 = document.getElementById("so-2");
let h2 = document.querySelector("h2");
console.log(so2);
function daucong() {
  h2.innerHTML = Number(so1.value) + Number(so2.value);
}
function dautru() {
  h2.innerHTML = Number(so1.value) - Number(so2.value);
}
function daunhan() {
  h2.innerHTML = Number(so1.value) * Number(so2.value);
}
function dauchia() {
  h2.innerHTML = Number(so1.value) / Number(so2.value);
}
function canbachai() {
  if (h2.innerHTML == Number(so1.value) + Number(so2.value)) {
    h2.innerHTML = Math.sqrt(Number(so1.value) + Number(so2.value));
  } else if (h2.innerHTML == Number(so1.value) * Number(so2.value)) {
    h2.innerHTML = Math.sqrt(Number(so1.value) * Number(so2.value));
  } else if (h2.innerHTML == Number(so1.value) / Number(so2.value)) {
    h2.innerHTML = Math.sqrt(Number(so1.value) / Number(so2.value));
  } else {
    h2.innerHTML = "error";
  }
}
function trituyetdoi() {
  if (h2.innerHTML == Number(so1.value) + Number(so2.value)) {
    h2.innerHTML = Math.abs(Number(so1.value) + Number(so2.value));
  } else if (h2.innerHTML == Number(so1.value) - Number(so2.value)) {
    h2.innerHTML = Math.abs(Number(so1.value) - Number(so2.value));
  } else if (h2.innerHTML == Number(so1.value) * Number(so2.value)) {
    h2.innerHTML = Math.abs(Number(so1.value) * Number(so2.value));
  } else if (h2.innerHTML == Number(so1.value) / Number(so2.value)) {
    h2.innerHTML = Math.abs(Number(so1.value) / Number(so2.value));
  }
}
function solonhon() {
  if (h2.innerHTML == Number(so1.value) + Number(so2.value)) {
    h2.innerHTML = Math.ceil(Number(so1.value) + Number(so2.value));
  } else if (h2.innerHTML == Number(so1.value) - Number(so2.value)) {
    h2.innerHTML = Math.ceil(Number(so1.value) - Number(so2.value));
  } else if (h2.innerHTML == Number(so1.value) * Number(so2.value)) {
    h2.innerHTML = Math.ceil(Number(so1.value) * Number(so2.value));
  } else if (h2.innerHTML == Number(so1.value) / Number(so2.value)) {
    h2.innerHTML = Math.ceil(Number(so1.value) / Number(so2.value));
  }
}
