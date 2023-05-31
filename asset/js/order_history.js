let order_list = JSON.parse(localStorage.getItem("order"));
let activeuser = JSON.parse(localStorage.getItem("active_user"));

order_list.find((el) => {
  if (activeuser.email === el.email) {
    div_content = document.createElement("div");
    div_content.setAttribute("class", "content");
    // console.log(div_content);
    // console.log(h2);
    let h2 = document.createElement("h2");
    h2.setAttribute("id", "orderid");
    h2.innerText = el["order_id"];
    div_content.append(h2);
    console.log(h2);

    let h3 = document.createElement("h3");
    h3.setAttribute("id", "order_date");
    h3.setAttribute("class", "orderdate");
    h3.innerText = el["order_date"];
    div_content.append(h3);

    let address = document.createElement("h3");
    address.setAttribute("id", "address");
    address.setAttribute("class", "address");
    address.innerText = el["address"];
    div_content.append(address);

    let h4 = document.createElement("h3");
    h4.setAttribute("id", "rupees");
    h4.setAttribute("class", "rupees");
    h4.innerText = "₹" + el["rupees"];
    div_content.append(h4);

    let image = document.createElement("img");
    image.setAttribute("id", "flower");
    image.setAttribute("src", el["image"]);
    image.setAttribute("alt", el["alt"]);
    div_content.append(image);

    let sts = document.createElement("h3");
    sts.setAttribute("id", "sts");
    sts.setAttribute("class", "sts");
    sts.innerText = "On progress";
    div_content.append(sts);
    document.querySelector("div.main_content").append(div_content);

    let cancel = document.createElement("button");
    cancel.setAttribute("id", "cancel");
    cancel.innerText = "Cancel"
    div_content.append(cancel);


    let cancelled = document.createElement("h1");
    cancelled.setAttribute("id","cancelled");
    cancelled.innerText = "cancelled"
    div_content.append(cancelled);

    if (el["cancel"] === true) {
      cancel.style.display = "none"
      sts.style.display = "none"
      cancelled.style.display ="block"
    }

    // cancel order

    cancel.addEventListener("click", (e) => {

        alert("confirm you cancel your order");
          cancel.style.display = "none"
          sts.style.display = "none"
          cancelled.style.display ="block"

          order_list.find(function (obj) {
            if (h2.innerText === obj["order_id"]+"") {
              obj["cancel"] = true
              localStorage.setItem("order",JSON.stringify(order_list))
            }
          })

        
    
      location.reload();
    });
    
  }
});

