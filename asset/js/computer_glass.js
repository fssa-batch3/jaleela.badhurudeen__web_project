// const product_List = [ {
//     "image" : {"source" : "../../asset/images/computer_glasses/cg1.png","alt" :"image of computer_glass"},
//     "name"  : "Nerdlane",
//     "description" : "Blue Full Frame Rectangle",
//     "amount" : 1500
// },
// {
//     "image" :  {"source": "../../asset/images/computer_glasses/cgtwo1.png" , "alt":"image of computer glass"},
//     "name"  : "IZIBUKO",
//     "description" : "Blue Full Frame Rectangle",
//     "amount" : 1000
// },
// {
//     "image" : { "source" : "../../asset/images/computer_glasses/cgfour1.png","alt" : "image of computer_glass"},
//     "name"  : "ALFProduct",
//     "description" : "Blue Full Frame Rectangle",
//     "amount" : 1100
// },
// {
//     "image" : { "source" : "../../asset/images/computer_glasses/cg51.png","alt" : "image of computer_glass"},
//     "name"  : "IZIBUKO",
//     "description" : "Blue Full Frame Rectangle",
//     "amount" : 1000
// },
// {
//     "image" : { "source" : "../../asset/images/computer_glasses/cg61.png","alt" : "image of computer_glass"},
//     "name"  : "Nerdlane",
//     "description" : "Blue Full Frame Rectangle",
//     "amount" : 900
// },
// {
//     "image" : { "source" : "../../asset/images/computer_glasses/cg71.png","alt" : "image of computer_glass"},
//     "name"  : "IZIBUKO",
//     "description" : "Blue Full Frame Rectangle",
//     "amount" : 1200
// },
// {
//     "image" : { "source" : "../../asset/images/computer_glasses/cg81.png","alt" : "image of computer_glass"},
//     "name"  : "ALFProduct",
//     "description" : "Blue Full Frame Rectangle",
//     "amount" : 999
// },
// {
//     "image" : { "source" : "../../asset/images/computer_glasses/cg91.png","alt" : "image of computer_glass"},
//     "name"  : "Nerdlane",
//     "description" : "Blue Full Frame Rectangle",
//     "amount" : 1500
// },
// {
//     "image" : { "source" : "../../asset/images/computer_glasses/cg101.png","alt" : "image of computer_glass"},
//     "name"  : "IZIBUKO",
//     "description" : "Blue Full Frame Rectangle",
//     "amount" : 1999
// },
// {
//     "image" : { "source" : "../../asset/images/computer_glasses/cg111.png","alt" : "image of computer_glass"},
//     "name"  : "ALFProduct",
//     "description" : "Blue Full Frame Rectangle",
//     "amount" : 899
// },
// {
//     "image" : { "source" : "../../asset/images/computer_glasses/cg121.png","alt" : "image of computer_glass"},
//     "name"  : "Nerdlane",
//     "description" : "Blue Full Frame Rectangle",
//     "amount" : 1500
// },
// {
//     "image" : { "source" : "../../asset/images/computer_glasses/cg31.png","alt" : "image of computer_glass"},
//     "name"  : "IZIBUKO",
//     "description" : "Blue Full Frame Rectangle",
//     "amount" : 1000
// }
// ]

// [
//     {
//         "product_id": 42,
//         "title": "IZIBUKO",
//         "image": "https://iili.io/HXgXrg9.webp",
//         "desc": "Pink Full Frame Rectangle",
//         "rupees": "1000"
//     },
//     {
//         "product_id": 94,
//         "title": "Nerdlane",
//         "image": "https://iili.io/HhRY6mu.webp",
//         "small_img1": "https://iili.io/HhRcC6Q.webp",
//         "small_img2": "https://iili.io/HhRYZqQ.webp",
//         "small_img3": "https://iili.io/HhRcFwu.webp",
//         "desc": "Blue Full Frame Rectangle Women Eyeglasses FullFrame",
//         "rupees": "1500"
//     }
// ]

let product_card_div;

let product_link;

let product_image;

let product_name;

let product_desc;

let product_category;

let product_price;

let k;

let product_List = JSON.parse(localStorage.getItem("create_specs"));

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
    product_category.innerText = "Computer Glasses";
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

//   if (e.key === "Enter") {
//     e.preventDefault();
//   }
//   let filter_List = product_List.filter((item) => {
//     if (item) {
//       return item.title.toLowerCase().includes(search_bar);
//     }
//   });
//   const parentHtmlDiv = document.querySelector(".computer_glasses");
//     parentHtmlDiv.innerHTML = "";
//     filter_List.forEach((item) => {
//         let product_card_div = document.createElement("div")
//         product_card_div.setAttribute("class", "product_card_div")
//         let href_link = "../product/product_detail.html?prod_id=" + item["productid"];
// });
