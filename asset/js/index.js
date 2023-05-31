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


let active = JSON.parse(localStorage.getItem('active_user'));
let profile = document.getElementById("user")
   if(active === false || active == null){
    profile.style.display = "none";

   }
