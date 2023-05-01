// code for active user
let cartsample = JSON.parse(localStorage.getItem("Cart"));
let user = JSON.parse(localStorage.getItem("active_user"));


cartsample.find( (e) => {
    if(e["email"] == user["email"]){
        // total += Number(e["rupees"])

// script for cart table

let tbody = document.createElement("tbody")
// table.append(tbody)
document.querySelector("table").append(tbody)
console.log(tbody);
console.log(document.querySelector("div.container"));

tr = document.createElement("tr")
tbody.append(tr)

let td = document.createElement("td")
tr.append(td)

let img = document.createElement("img")
img.setAttribute("src",e["image"])
img.setAttribute("alt", "cg")
td.append(img)

td = document.createElement("td")
tr.append(td)

let p = document.createElement("p")
p.setAttribute("class", "h_three");
p.innerText = "Signa";
td.prepend(p)

p = document.createElement("p")
p.setAttribute("class", "h_five");
p.innerText = e["title"];
td.append(p)

p = document.createElement("p")
// p.setAttribute("class", "h_five");
p.innerText = e["desc"];
td.append(p)

p = document.createElement("p")
// p.setAttribute("class", "h_five");
p.innerText = e["rupees"];
td.append(p)

// p = document.createElement("p")
// p.setAttribute("class", "h_five");
// p.innerText = "COLOR : black and blue";
// td.append(p)

let p_star = document.createElement("p")
p_star.setAttribute("class", "h_five");
p_star.innerText = "Ratings";
td.append(p_star)

let span = document.createElement("span")
p_star.prepend(span)

let i = document.createElement("i")
i.setAttribute("class", "fa-solid fa-star")
span.prepend(i)

i = document.createElement("i")
i.setAttribute("class", "fa-solid fa-star")
span.append(i)

i = document.createElement("i")
i.setAttribute("class", "fa-solid fa-star")
span.append(i)

i = document.createElement("i")
i.setAttribute("class", "fa-solid fa-star")
span.append(i)

i = document.createElement("i")
i.setAttribute("class", "fa-solid fa-star")
span.append(i)

td = document.createElement("td")
tr.append(td)

input = document.createElement("input")
input.setAttribute("type", "number")
input.setAttribute("id", "qty")
input.setAttribute("class","qty")
input.setAttribute("min", "1")
input.setAttribute("max", "10")
input.setAttribute("value", "1")
td.prepend(input)

label = document.createElement("label")
label.setAttribute("for", "name")
label.innerText = "name";
td.append(label)

td = document.createElement("td")
td.setAttribute("data-keyword",e["rupees"])
td.innerText = e["rupees"];
td.setAttribute("id", "rs")
td.setAttribute("class", "rs")
tr.append(td)

let a = document.createElement("a")
a.setAttribute("href", "");
tbody.append(a)

let remove_btn = document.createElement("div");
remove_btn.setAttribute("class", "remove");
a.append(remove_btn);

let remove = document.createElement("h2");
remove.innerText = "remove";
remove_btn.append(remove);

let image = document.createElement("img");
image.setAttribute("src", "../../asset/images/homepage/icons8-trash-can.svg");
remove_btn.append(image);

// let hr = document.createElement("hr");
// document.querySelector("div.container").append(hr);

let con_div = document.createElement("div");
document.querySelector("div.container").append(con_div);


// code for remove cart
remove_btn.addEventListener("click",(e)=>{

    for(let i=0; i<cartsample.length; i++){

        if(user["email"]==cartsample[i]["email"]){
            alert("confirm you remove product")
            cartsample.splice(i,1);
            localStorage.setItem("Cart",JSON.stringify(cartsample));
            location.reload();
            break;
        }
    
    }
})
}
});


// product quantity
let cart_qty = document.querySelectorAll(".qty")
let rs = document.querySelectorAll(".rs")
let total_amount = document.getElementById("total_count");
let total_amount1 = document.getElementById("total_count1");
console.log(total_amount);
for(let i = 0; i < cart_qty.length;i++){
    // add total
    
function getPrice() {

    let total_amt_qty = cart_qty[i].value * parseFloat(rs[i].dataset.keyword)
    rs[i].innerText = total_amt_qty;

    let total = 0
    for (let j = 0; j < cart_qty.length; j++) {
        total = total + parseFloat(rs[j].innerHTML)
        
    }

     total_amount.innerText =  total
     
    total_amount1.innerText = total
    
}
getPrice();
cart_qty[i].addEventListener("change",()=>{

     getPrice();
     
})

}








 