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
    sts.innerText = "";
    div_content.append(sts);
    document.querySelector("div.main_content").append(div_content);

    let cancel = document.createElement("button");
    cancel.setAttribute("id", "cancel");
    cancel.innerText = "Cancel"
    div_content.append(cancel);

    cancel.addEventListener("click", (e) => {

      for (let i = 0; i < order_list.length; i++) {
        if (activeuser["email"] == order_list[i]["email"]) {
          alert("confirm you cancel your order");
          order_list.splice(i, 1);
          localStorage.setItem("order", JSON.stringify(order_list));
          location.reload();
          break;
        }
      }
    });
    
  }
});

// cancel order

let date_text = document.querySelectorAll(".sts");

for (let i = 0; i < date_text.length; i++) {
  let order_date_arr = order_list[i]["order_date"].split("/");

  let order_date = order_date_arr[0];

  let cur_dateObj = new Date();
  let cur_month = cur_dateObj.getUTCMonth() + 1; //months from 1-12
  let cur_day = cur_dateObj.getUTCDate();
  let cur_year = cur_dateObj.getUTCFullYear();

  let cal_date = cur_day - order_date;

  if (cal_date >= 3) {
    date_text[i].innerHTML = "Delivered";
  } else {
    date_text[i].innerHTML = "On process";
  }
}

