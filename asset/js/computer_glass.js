
let product_card_div;

let product_link;

let product_image;

let product_name;

let product_desc;

let product_category;

let product_price;

let k;


const search2 = window.location.search
const url = new URLSearchParams(search2);
const product_type = url.get("type")
let banner = document.getElementById("banner_imgs");

if (product_type === "computer") {
  banner.src = "https://iili.io/HSO4o4n.jpg"
}
if(product_type === "sun"){
  banner.src = "https://iili.io/HSO6kVS.jpg"
}
if(product_type === "power"){
  banner.src = "https://iili.io/HSO4J2a.webp"
}
if(product_type === "contact"){
  banner.src = "https://iili.io/HSO413u.webp"
}
if(product_type === "metalics"){
  banner.src = "https://iili.io/HSO6aNR.webp"
}
if(product_type === "rectangle"){
  banner.src = "https://iili.io/HSO6wN4.webp"
}
if(product_type === "pilot"){
  banner.src = "https://iili.io/HSO6EPt.webp"
}

const glasses_arr = JSON.parse(localStorage.getItem("create_specs"))

let product_List =  glasses_arr.filter(function (obj) {
  
  if (product_type === obj["cat"]) {
    return true
  }
  else{
    return false
  }
})

console.log();

// for (k = 0; k < product_List.length; k++) {
product_List.filter(function (k) {
  if (k.status) {
    product_card_div = document.createElement("div");
    product_card_div.setAttribute("class", "product-card search_box");
    document.querySelector(".computer_glasses").append(product_card_div);

    product_link = document.createElement("a");
    product_link.setAttribute(
      "href",
      "../computer_glasses_product/cg_product_one.html?id=" + k["product_id"]
    );
    -(
      //   product_link.setAttribute("class", "search_box")
      product_card_div.append(product_link)
    );
    console.log(product_link);

    product_image = document.createElement("img");
    product_image.setAttribute("src", k["image"]);
    product_image.setAttribute("alt", k["image"]["alt"]);
    product_link.append(product_image);

    product_name = document.createElement("p");
    product_name.setAttribute("class", "product-title");
    product_name.innerText = k["title"];
    product_link.append(product_name);

    product_desc = document.createElement("p");
    product_desc.setAttribute("class", "product-desc");
    product_desc.innerText = k["desc"];
    product_link.append(product_desc);

    product_category = document.createElement("p");
    product_category.setAttribute("class", "product-category");
    product_category.innerText = k["cat"] + " " + "glasses";
    product_link.append(product_category);

    product_price = document.createElement("p");
    product_price.setAttribute("class", "product-price");
    product_price.innerText = k["rupees"] + "/-";
    product_link.append(product_price);
  }
});
// productList(k);

// function productList(k) {}
// search feature

let search = document.getElementById("name");
search.addEventListener("keyup", (e) => {
  let search_bar = e.target.value.toLowerCase();

  let letter = document.querySelectorAll(".search_box");

  letter.forEach((element) => {
    let content = element.children[0].textContent.toLowerCase();

    if (content.includes(search_bar)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});


