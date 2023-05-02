let order_his = JSON.parse(localStorage.getItem("order"));
let user = JSON.parse(localStorage.getItem("active_user"));


order_his.find( (e) => {
    if(e["email"] == user["email"]){

let tbody = document.createElement("tbody")
document.querySelector("table").append(tbody)


let tr = document.createElement("tr")
tbody.append(tr)

let td = document.createElement("td")
tr.append(td)

let order_id = document.createElement("p")
order_id.setAttribute("class", "order_id")
order_id.innerText = e["order_id"]
td.append(order_id)

let order_date = document.createElement("p")
order_id.setAttribute("class", "order_date")
order_id.innerText = e["order_date"]
td.append(order_id)

let price = document.createElement("p")
order_id.setAttribute("class", "rupees")
order_id.innerText = e["rupees"]
td.append(order_id)

let img = document.createElement("img")
img.setAttribute("src",e["image"])
img.setAttribute("alt", "product_img")
td.append(img)

let status = document.createElement("p")
order_id.setAttribute("class", "bending")
order_id.innerText = e["bending"]
td.append(order_id)
    }
});