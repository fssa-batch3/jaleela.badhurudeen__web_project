let cartsample = JSON.parse(localStorage.getItem("Cart"));
let user = JSON.parse(localStorage.getItem("active_user"));

let count = [];
cartsample.forEach((e) => {
  if (e["email"] == user["email"]) {
    count.push(e);
  }
});
let cnt = document.getElementById("count");
cnt.innerText = count.length;
