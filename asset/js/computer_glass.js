const product_List = [ {
    "image" : {"source" : "../../asset/images/computer_glasses/cg1.png","alt" :"image of computer_glass"},
    "name"  : "Nerdlane",
    "description" : "Blue Full Frame Rectangle",
    "amount" : 1500
},
{
    "image" :  {"source": "../../asset/images/computer_glasses/cgtwo1.png" , "alt":"image of computer glass"},
    "name"  : "IZIBUKO",
    "description" : "Blue Full Frame Rectangle",
    "amount" : 1000
},
{
    "image" : { "source" : "../../asset/images/computer_glasses/cgfour1.png","alt" : "image of computer_glass"},
    "name"  : "ALFProduct",
    "description" : "Blue Full Frame Rectangle",
    "amount" : 1100
},
{
    "image" : { "source" : "../../asset/images/computer_glasses/cg51.png","alt" : "image of computer_glass"},
    "name"  : "IZIBUKO",
    "description" : "Blue Full Frame Rectangle",
    "amount" : 1000
},
{
    "image" : { "source" : "../../asset/images/computer_glasses/cg61.png","alt" : "image of computer_glass"},
    "name"  : "Nerdlane",
    "description" : "Blue Full Frame Rectangle",
    "amount" : 900
},
{
    "image" : { "source" : "../../asset/images/computer_glasses/cg71.png","alt" : "image of computer_glass"},
    "name"  : "IZIBUKO",
    "description" : "Blue Full Frame Rectangle",
    "amount" : 1200
},
{
    "image" : { "source" : "../../asset/images/computer_glasses/cg81.png","alt" : "image of computer_glass"},
    "name"  : "ALFProduct",
    "description" : "Blue Full Frame Rectangle",
    "amount" : 999
},
{
    "image" : { "source" : "../../asset/images/computer_glasses/cg91.png","alt" : "image of computer_glass"},
    "name"  : "Nerdlane",
    "description" : "Blue Full Frame Rectangle",
    "amount" : 1500
},
{
    "image" : { "source" : "../../asset/images/computer_glasses/cg101.png","alt" : "image of computer_glass"},
    "name"  : "IZIBUKO",
    "description" : "Blue Full Frame Rectangle",
    "amount" : 1999
},
{
    "image" : { "source" : "../../asset/images/computer_glasses/cg111.png","alt" : "image of computer_glass"},
    "name"  : "ALFProduct",
    "description" : "Blue Full Frame Rectangle",
    "amount" : 899
},
{
    "image" : { "source" : "../../asset/images/computer_glasses/cg121.png","alt" : "image of computer_glass"},
    "name"  : "Nerdlane",
    "description" : "Blue Full Frame Rectangle",
    "amount" : 1500
},
{
    "image" : { "source" : "../../asset/images/computer_glasses/cg31.png","alt" : "image of computer_glass"},
    "name"  : "IZIBUKO",
    "description" : "Blue Full Frame Rectangle",
    "amount" : 1000
}
]


let product_card_div;

let product_link;

let product_image;

let product_name;

let product_desc;

let product_category;

let product_price;

let k;

for(k=0; k<product_List.length; k++){
    productList();
}


function productList(){

product_card_div = document.createElement("div");
product_card_div.setAttribute("class", "product-card");
document.querySelector(".computer_glasses").append(product_card_div);


product_link = document.createElement("a");
product_link.setAttribute("href", "#");
product_card_div.append(product_link);


product_image = document.createElement("img");
product_image.setAttribute("src", product_List[k]["image"]["source"]);
product_image.setAttribute("alt", product_List[k]["image"]["alt"]);
product_link.append(product_image);


product_name = document.createElement("p");
product_name.setAttribute("class", "product-title");
product_name.innerText = product_List[k]["name"];
product_link.append(product_name);


product_desc = document.createElement("p");
product_desc.setAttribute("class", "product-desc");
product_desc.innerText = product_List[k]["description"];
product_link.append(product_desc);


product_category = document.createElement("p");
product_category.setAttribute("class", "product-category");
product_category.innerText = "Computer Glasses";
product_link.append(product_category);

product_price = document.createElement("p");
product_price.setAttribute("class", "product-price");
product_price.innerText = product_List[k]["amount"] +"/-"
product_link.append(product_price);

}