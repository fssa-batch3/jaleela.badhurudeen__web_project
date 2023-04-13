//this is a code for product create page



let specs = JSON.parse(localStorage.getItem("create_specs")) ?? [];

const productid = Math.floor(Math.random() * 1000);
function create_product() {
  product_create = {};
 

  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const small_img1 = document.getElementById("small_img1").value;
  const small_img2 = document.getElementById("small_img2").value;
  const small_img3 = document.getElementById("small_img3").value;
  const desc = document.getElementById("desc").value;
  const rupees = document.getElementById("rupees").value;

  product_create["product_id"] = productid;
  product_create["title"] = title;
  product_create["image"] = image;
  product_create["small_img1"] = small_img1;
  product_create["small_img2"] = small_img2;
  product_create["small_img3"] = small_img3;
  product_create["desc"] = desc;
  product_create["rupees"] = rupees;

  specs.push(product_create);
  localStorage.setItem("create_specs", JSON.stringify(specs));
}


// this is a code for product delete page

function delete_product() {
  let user_pdt = JSON.parse(localStorage.getItem("create_specs"));
  // confirm("Are you sure want to delete your account?")
  for (let i = 0; i < user_pdt.length; i++) {
    if (document.getElementById("title").value == user_pdt[i]["title"]) {
      user_pdt.splice(i, 1);
      localStorage.setItem("create_specs", JSON.stringify(user_pdt));
    }
  }
}

// function update_product() {
//     let specs = JSON.parse(localStorage.getItem("create_specs"));
  
  //   const value = document.getElementById("value").value;
  
  //   specs.forEach((e) => {
  //     if (value === e["value"]) {
          
  //       e["image"] = document.getElementById("image").value;
  //       e["title"] = document.getElementById("title").value;
  //       e["small_img1"] = document.getElementById("small_img1").value;
  //       e["small_img2"] = document.getElementById("small_img2").value;
  //       e["small_img3"] = document.getElementById("small_img3").value;
  //       e["desc"] = document.getElementById("desc").value;
  //       e["rupees"] = document.getElementById("rupees").value;
  
  //       localStorage.setItem("create_specs", JSON.stringify(specs));
  //     }
  //   });
  // }





// this is a code for product update page


function list_products(){

let output = "";
let append_div = document.querySelector(".table-body");
for (let i = 0; i < specs.length; i++) {
  output += `
  <tr>
  <td>${specs[i].product_id}</td>
  <td class="td-image"><img src="${specs[i].image}"></td>
  <td>${specs[i].title}</td>
  <td>${specs[i].rupees}</td>
  <td onclick="updateproduct(${specs[i].product_id})"><button id="update-btn">Update</button></td>
</tr>`;
  append_div.innerHTML = output;
}

}

function updateproduct(id) {
  specs.find(function (obj) {
    if (obj.product_id == id) {
      document.getElementById("image").value = obj.image;
      document.getElementById("small_img1").value = obj.small_img1;
      document.getElementById("small_img2").value = obj.small_img2;
      document.getElementById("small_img3").value = obj.small_img3;
      document.getElementById("title").value = obj.title;
      document.getElementById("desc").value = obj.desc;
      document.getElementById("rupees").value = obj.rupees;
    }
  });
}
function updatenew(){
  const img = document.getElementById("image").value;
  const small_img1 = document.getElementById("small_img1").value;
  const small_img2 = document.getElementById("small_img2").value;
  const small_img3 = document.getElementById("small_img3").value;
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const rupees = document.getElementById("rupees").value;
  specs.find(function (obj){
    if(title == obj.title){
      obj.image = img;
      obj.small_img1 = small_img1;
      obj.small_img2 = small_img2;
      obj.small_img3 = small_img3;
      obj.title = title;
      obj.desc = desc;
      obj.rupees = rupees;
    }
  })
  localStorage.setItem("create_specs", JSON.stringify(specs));
  list_products();
}


list_products();




