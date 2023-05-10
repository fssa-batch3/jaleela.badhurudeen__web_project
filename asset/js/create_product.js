//this is a code for product create page



let specs = JSON.parse(localStorage.getItem("create_specs")) ?? [];

let count=0;

for(let k=0; k<specs.length; k++){
  count++
}
let productid = count;
function create_product() {
  product_create = {};


  const cat = document.getElementById("cat").value;
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const small_img1 = document.getElementById("small_img1").value;
  const small_img2 = document.getElementById("small_img2").value;
  const small_img3 = document.getElementById("small_img3").value;
  const desc = document.getElementById("desc").value;
  const rupees = document.getElementById("rupees").value;

  product_create["cat"] = cat;
  product_create["product_id"] = productid;
  product_create["title"] = title;
  product_create["image"] = image;
  product_create["small_img1"] = small_img1;
  product_create["small_img2"] = small_img2;
  product_create["small_img3"] = small_img3;
  product_create["desc"] = desc;
  product_create["rupees"] = rupees;
  product_create["status"]=true;

  specs.push(product_create);
  localStorage.setItem("create_specs", JSON.stringify(specs));
  location.reload();

}


// this is a code for product delete page




function delete_product(id){
  specs.find(function(obj){
    console.log(obj.product_id==id)
    if(obj.product_id==id){
      obj.status=false;
      localStorage.setItem("create_specs", JSON.stringify(specs));
    }
  })

}




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
  <td onclick="delete_product(${specs[i].product_id})"><button id="update_btn">Delete</button></td>
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
}


list_products();




