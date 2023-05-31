let specs = JSON.parse(localStorage.getItem("create_specs"));

const url = window.location.search;
const params = new URLSearchParams(url);
const search_value = params.get("id");

let values;
specs.find(function (e) {
  if (e["product_id"] == search_value) {
    return (values = e);
  } else {
    return (values = 0);
  }
});


let changeImg = [values["image"], values.small_img1, values.small_img2, values.small_img3]

let container_img;
let large_img_div;
let large_img;
let small_img_div;
let small_img;
let product_detail;
let product_title;
let product_desc;
let product_category;
let color;
let product_price;
let icon;
let btn;
let cart;
let shop;
let frame_size;
let frame_btn;

container_img = document.createElement("div");
container_img.setAttribute("class", "container_img");
document.querySelector(".container").append(container_img);
console.log(container_img);

large_img_div = document.createElement("div");
large_img_div.setAttribute("class", "large_img_div");
container_img.append(large_img_div);

// change img


large_img = document.createElement("img");
large_img.setAttribute("class", "slide");
large_img.setAttribute("src", changeImg[0]);
large_img.setAttribute("alt", values["image"]["alt"]);
large_img_div.append(large_img);
console.log();

small_img_div = document.createElement("div");
small_img_div.setAttribute("class", "small_img_div");
container_img.append(small_img_div);

small_img1 = document.createElement("img");
small_img1.setAttribute("src", values["image"]);
small_img1.setAttribute("class", "spec_img");



// small_img1.addEventListener("click", function(){

//   changeImg = values.image
// })
// small_img1.setAttribute("alt", values["small_img1"]["alt"]);
// small_img1.setAttribute("onclick", values["small_img1"]["source"]);
small_img_div.append(small_img1);

small_img2 = document.createElement("img");
small_img2.setAttribute("src", values["small_img1"])
small_img2.setAttribute("class", "spec_img");

// small_img2.addEventListener("click", function(){
//   changeImg = values.small_img1
//   // location.reload()
// })
// small_img2.setAttribute("alt", values["small_img2"]["alt"]);
// small_img2.setAttribute("onclick", values["small_img2"]["source"]);
small_img_div.append(small_img2);

small_img3 = document.createElement("img");
small_img3.setAttribute("src", values["small_img2"]);
small_img3.setAttribute("class", "spec_img");

// small_img3.addEventListener("click", function(){
//   changeImg = values.small_img2
// })
// small_img3.setAttribute("alt", values["small_img3"]["alt"]);
small_img_div.append(small_img3);

small_img4 = document.createElement("img");
small_img4.setAttribute("src", values["small_img3"]);
small_img4.setAttribute("class", "spec_img");

// small_img4.addEventListener("click", function(){
//   changeImg = values.small_img3
// })
// small_img4.setAttribute("alt", values["small_img4"]["alt"]);
small_img_div.append(small_img4);

changeImg = values["image"]

product_detail = document.createElement("div");
product_detail.setAttribute("class", "product_detail");
document.querySelector(".container").append(product_detail);

product_title = document.createElement("p");
product_title.setAttribute("class", "product-title");
product_title.innerText = values["title"];
product_detail.append(product_title);

product_desc = document.createElement("p");
product_desc.setAttribute("class", "product-desc");
product_desc.innerText = values["desc"];
product_detail.append(product_desc);

product_category = document.createElement("p");
product_category.setAttribute("class", "product-category");
product_category.innerText = "Computer Glasses";
product_detail.append(product_category);

color = document.createElement("p");
color.setAttribute("class", "color");
color.innerText = "COLOR : " + " " + "Black and blue";
product_detail.append(color);

product_price = document.createElement("p");
product_price.setAttribute("class", "product-price");
product_price.innerText = values["rupees"] + "/-";
product_detail.append(product_price);

for (let i = 1; i <= 5; i++) {
  icon = document.createElement("i");
  icon.setAttribute("id", "star");
  icon.setAttribute("class", "fa-solid fa-star");
  product_detail.append(icon);
}

btn = document.createElement("div");
btn.setAttribute("class", "btn");
product_detail.append(btn);

product_link = document.createElement("a");
product_link.setAttribute("href", "../order/add_to_cart.html");
btn.append(product_link);

cart = document.createElement("button");
cart.setAttribute("id", "addCart");
cart.innerText = "Add to Cart";
btn.append(cart);

shop = document.createElement("button");
shop.setAttribute("id", "shop_now");
shop.innerText = "Shop Now";
btn.append(shop);

frame_size = document.createElement("div");
frame_size.setAttribute("class", "btn_one");
product_detail.append(frame_size);

product_link3 = document.createElement("a");
product_link3.setAttribute("href", "../../pages/facilities/frame_size.html");
frame_size.append(product_link3);
console.log(product_link3);

frame_btn = document.createElement("button");
// shop.setAttribute("class", "btn");
frame_btn.innerText = "Do You Know About Your Frame Size?";
product_link3.append(frame_btn);


//validation for buy product

// const login_valid2 = localStorage.getItem("active_user");
let user = JSON.parse(localStorage.getItem("active_user"));
// const addCart = document.getElementById("addCart");
// addCart.addEventListener("click",(e)=>{
//   // if(login_valid=="false"){
//   //   alert("Login before shop")
//   // }
//   else{
//     window.location.href = "../order/add_to_cart.html"
//   }
// } )





let cart_btn = document.getElementById("addCart");
cart_btn.addEventListener("click", element => {



  if(user==false){
    alert("Login before shop")
  }



    else{


  let addCart = JSON.parse(localStorage.getItem("Cart")) ?? [];

  let result = 0;

  addCart.find((e) => {
    if (
      e["product_id"] == values["product_id"] &&
      e["email"] == user["email"]
    ) {
      return result = 1;
    } else {
      return result = 0;
    }
  });

  if (result == 1) {
    alert("already added");
  } 
  else {
    let product = {};

    product["image"] = values["image"];
    product["rupees"] = values["rupees"];
    product["desc"] = values["desc"];
    product["product_id"] = values["product_id"];
    product["title"] = values["title"];
    product["email"] = user["email"];

    addCart.push(product);
    localStorage.setItem("Cart", JSON.stringify(addCart));
    alert("added");
  }

}
});


let change_image_div
let specs_list=JSON.parse(localStorage.getItem("create_specs"))
specs_list.forEach(element => {
  if(search_value==element["product_id"]){
     change_image_div=[element["image"],element["small_img1"],element["small_img2"],element["small_img3"]]
  }
});

console.log(values.small_img1, "imgages");
let spec_imgs= document.querySelectorAll(".spec_img")
console.log(document.getElementsByClassName("spec_img"),"htygrfd");
spec_imgs.forEach((e,index)=>{
 
  e.addEventListener("click",elem=>{
    console.log("hgfx");
    let shown_img =document.querySelector(".large_img_div")
    shown_img.innerHTML=`<img src=${change_image_div[index]} alt="specs">`
    // shown_img.setAttribute("src",changeImg[index])
  
  })
})


 //validation for buy product

// const login_valid = localStorage.getItem("active_user");
const shop_now = document.getElementById("shop_now");
shop_now.addEventListener("click",(e)=>{
  if(user==false){
    alert("Login before shop")
  }
  else{
    window.location.href = "../../pages/facilities/lens.html?id=" + values.product_id
  }
} )
