
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

   let  h3 = document.createElement("h3");
    h3.setAttribute("id", "order_date");
    h3.setAttribute("class", "orderdate");
    h3.innerText = el["order_date"];
    div_content.append(h3);

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
    sts.innerText = "Processing";
    div_content.append(sts);
    document.querySelector("div.main_content").append(div_content);
  }
});
