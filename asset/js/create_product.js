const productid = Math.floor(Math.random() * 100);
function create_product() {
  product_create = {};
  let specs = JSON.parse(localStorage.getItem("create_specs")) ?? [];

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

function update_product() {
    let specs = JSON.parse(localStorage.getItem("create_specs"));
  
    const value = document.getElementById("value").value;
  
    specs.forEach((e) => {
      if (value === e["value"]) {
          
        e["image"] = document.getElementById("image").value;
        e["title"] = document.getElementById("title").value;
        e["small_img1"] = document.getElementById("small_img1").value;
        e["small_img2"] = document.getElementById("small_img2").value;
        e["small_img3"] = document.getElementById("small_img3").value;
        e["desc"] = document.getElementById("desc").value;
        e["rupees"] = document.getElementById("rupees").value;
  
        localStorage.setItem("create_specs", JSON.stringify(specs));
      }
    });
  }

//  const productid= Math.floor(Math.random()*100);
//  function create_product(){
//  product_create = {}
//  let specs =  JSON.parse(localStorage.getItem('create_specs')) ?? []

// const title = document.getElementById("title").value
// const image = document.getElementById("image").value
// const small_img1 = document.getElementById("small_img1").value
// const small_img2 = document.getElementById("small_img2").value
// const small_img3 = document.getElementById("small_img3").value
// const desc = document.getElementById("desc").value
// const rupees = document.getElementById("rupees").value
// product_create["product_id"]=productid;
// product_create["title"] = title;
// product_create["image"] = image;
// product_create["small_img1"] = small_img1;
// product_create["small_img2"] = small_img2;
// product_create["small_img3"] = small_img3;
// product_create["desc"] = desc;
// product_create["rupees"] = rupees;

// specs.push(product_create);
// localStorage.setItem("create_specs",JSON.stringify(specs))

// }

// function delete_product(){
//     let user_pdt = JSON.parse(localStorage.getItem("create_specs"));
//             // confirm("Are you sure want to delete your account?")
//             for (let i = 0; i <  user_pdt.length; i++) {
//             if(document.getElementById("title").value == user_pdt[i]["title"]){
//                 user_pdt.splice(i,1)
//                 localStorage.setItem("create_specs", JSON.stringify(user_pdt));
//             }
//             }
//         }

// update product

//     let update_pdt = JSON.parse(localStorage.getItem('create_specs'));
//     console.log(update_pdt);
//     for (let i=0; i <= update_pdt.length; i++){
//     document.getElementById("title").value = update_pdt[i]["title_name"];
//     document.getElementById("image").value = update_pdt[i]["image_url"];
//     document.getElementById("desc").value = update_pdt[i]["desc_pdt"];
//     document.getElementById("rupees").value = update_pdt[i]["rs_pdt"];

//      }
//      function update_product(){
// let update_pdt = JSON.parse(localStorage.getItem("create_specs"));
//   for(let i = 0; i < update_pdt.length; i++){
//     if(document.getElementById("title").value == update_pdt[i]["title"]){
//         update_pdt[i].title_name= document.getElementById("title").value
//     }
//   localStorage.setItem("create_specs",JSON.stringify(update_pdt))
//   }
// }
