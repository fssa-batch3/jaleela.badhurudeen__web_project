
let cartsample = JSON.parse(localStorage.getItem("Cart"));
let user = JSON.parse(localStorage.getItem("active_user"));

let total = 0;

cartsample.find( (e) => {
    if(e["email"] == user["email"]){
        total += Number(e["rupees"])




// let table = document.createElement("table")
// document.querySelector("div.container").append(table)

// console.log(table)

// let caption = document.createElement("caption")
// caption.innerText = "this is head of the buying products";
// table.prepend(caption)

// let thead = document.createElement("thead");
// table.append(thead)

// let tr = document.createElement("tr")
// thead.prepend(tr)

// let th = document.createElement("th")
// th.innerText = "Product";
// tr.prepend(th)

// th = document.createElement("th")
// th.innerText = "Detail";
// tr.append(th)

// th = document.createElement("th")
// th.innerText = "Quantity";
// tr.append(th)

// th = document.createElement("th")
// th.innerText = "Rupees";
// tr.append(th)

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
input.setAttribute("value", "1")
td.prepend(input)

label = document.createElement("label")
label.setAttribute("for", "name")
label.innerText = "name";
td.append(label)

td = document.createElement("td")
td.innerText = e["rupees"];
tr.append(td)

let a = document.createElement("a")
a.setAttribute("href", "");
document.querySelector("div.container").append(a)

let remove_btn = document.createElement("div");
remove_btn.setAttribute("class", "remove");
a.append(remove_btn);

let remove = document.createElement("h2");
remove.innerText = "remove";
remove_btn.append(remove);

let image = document.createElement("img");
image.setAttribute("src", "../../asset/images/homepage/icons8-trash-can.svg");
remove_btn.append(image);

let hr = document.createElement("hr");
document.querySelector("div.container").append(hr);

let con_div = document.createElement("div");
document.querySelector("div.container").append(con_div);

remove_btn.addEventListener("click",(e)=>{

    for(let i=0; i<cartsample.length; i++){

        if(user["email"]==cartsample[i]["email"]){
            cartsample.splice(i,1);
            localStorage.setItem("Cart",JSON.stringify(cartsample));
            location.reload();
            break;
        }
        

    }
})
}
});

let total_amount = document.getElementById("total_count");

 total_amount.innerText = total;

 let total_amount1 = document.getElementById("total_count1");
 
 total_amount1.innerText = total;



