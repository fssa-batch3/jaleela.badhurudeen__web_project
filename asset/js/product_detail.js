let specs =  JSON.parse(localStorage.getItem('create_specs'));

const url = window.location.search;
const params = new URLSearchParams(url);
const search_value = params.get("id");

let values;
 specs.find(function(e){
  if(e["product_id"] == search_value){

      return values = e;
  }
  else{
      return values = 0;
  }

 })

 let container_img;
 let large_img_div;
 let  large_img;
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


large_img = document.createElement("img");
large_img.setAttribute("class", "slide");
large_img.setAttribute("src", values["image"]);
large_img.setAttribute("alt", values["image"]["alt"]);
large_img_div.append(large_img);
console.log();

small_img_div = document.createElement("div");
small_img_div.setAttribute("class", "small_img_div");
container_img.append(small_img_div);

small_img1 = document.createElement("img");
small_img1.setAttribute("src", values["image"]);
// small_img1.setAttribute("alt", values["small_img1"]["alt"]);
// small_img1.setAttribute("onclick", values["small_img1"]["source"]);
small_img_div.append(small_img1);

small_img2 = document.createElement("img");
small_img2.setAttribute("src", values["small_img1"]);
// small_img2.setAttribute("alt", values["small_img2"]["alt"]);
// small_img2.setAttribute("onclick", values["small_img2"]["source"]);
small_img_div.append(small_img2);

small_img3 = document.createElement("img");
small_img3.setAttribute("src", values["small_img2"]);
// small_img3.setAttribute("alt", values["small_img3"]["alt"]);
small_img_div.append(small_img3);

small_img4 = document.createElement("img");
small_img4.setAttribute("src", values["small_img3"]);
// small_img4.setAttribute("alt", values["small_img4"]["alt"]);
small_img_div.append(small_img4);

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
product_price.innerText = values["rupees"] +"/-"
product_detail.append(product_price);

for (let i=1; i<=5; i++){
     icon = document.createElement("i");
     icon.setAttribute("id", "star");
     icon.setAttribute("class","fa-solid fa-star");
     product_detail.append(icon);
   }

btn = document.createElement("div");
btn.setAttribute("class", "btn");
product_detail.append(btn);

cart = document.createElement("button");
// cart.setAttribute("class", "btn");
cart.innerText = "Add to Cart";
btn.append(cart);

shop = document.createElement("button");
// shop.setAttribute("class", "btn");
shop.innerText = "Shop Now";
btn.append(shop);


frame_size = document.createElement("div");
frame_size.setAttribute("class", "btn_one");
product_detail.append(frame_size);

frame_btn = document.createElement("button");
// shop.setAttribute("class", "btn");
frame_btn.innerText = "Do You Know About Your Frame Size?";
frame_size.append(frame_btn);