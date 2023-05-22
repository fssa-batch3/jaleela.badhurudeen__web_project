let profile_side = document.createElement("div");
profile_side.setAttribute("class", "profile_side");
document.querySelector("body").append(profile_side);

let profile = document.createElement("h2");
profile.innerText = "Upload Your Profile";
profile_side.append(profile);

let image =  document.createElement("img");
image.setAttribute("src", "../../asset/images/homepage/girl3.jpg");
image.setAttribute("alt", "no image");
profile_side.append(image);

let url = document.createElement("input");
url.setAttribute("type", "text");
url.setAttribute("name", "file");
url.setAttribute("id", "file");
url.setAttribute("placeholder", "Enter your image URL");
profile_side.append(url);

let btn = document.createElement("div");
btn.setAttribute("class", "btn_prfl");
profile_side.append(btn);

let a = document.createElement("a");
a.setAttribute("href", "../admin/doctor_edit.html");
btn.append(a);

let a_button = document.createElement("button");
a_button.setAttribute("type", "button");
a_button.innerText = "Edit";
a.append(a_button);

let button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("onclick", "delete_profile()");
button.innerText = "LogOut";
btn.append(button);

let pro = document.createElement("div");
pro.setAttribute("class", "profile");
document.querySelector("body").append(pro);

let h1 = document.createElement("h1");
h1.innerText = "Profile";
pro.append(h1);


let profile_img = document.createElement("div");
profile_img.setAttribute("class", "profile_img");
pro.append(profile_img);

let p_image =  document.createElement("img");
p_image.setAttribute("src", "../../asset/images/homepage/profile.png");
p_image.setAttribute("alt", "no image");
profile_img.append(p_image);

let form =  document.createElement("form");
pro.append(form);

let div_1 = document.createElement("div");
div_1.setAttribute("class", "div_1");
form.append(div_1);
console.log(div_1);

let d_name =  document.createElement("label");
d_name.setAttribute("for", "name");
d_name.innerText = "Name";
d_name.append(div_1);

let br1 = document.createElement("br");
br1.append(div_1);
 
let name_input = document.createElement("input");
name_input.setAttribute("type", "text");
name_input.setAttribute("name", "name");
name_input.setAttribute("id", "name");
name_input.setAttribute("placeholder", "Enter Your Name");
name_input.setAttribute("title", "username is cannot contain space or only minimum 2");
name_input.setAttribute("pattern", "[A-Za-z]{2,20}");
name_input.setAttribute("required", "");
name_input.setAttribute("disabled", "");
name_input.append(div_1);

let b1 = document.createElement("br");
b1.append(div_1);

let b11 = document.createElement("br");
b11.append(div_1);




// next
let d_spl =  document.createElement("label");
d_spl.setAttribute("for", "Speciality");
d_spl.innerText = "Speciality";
d_spl.append(div_1);

let br2 = document.createElement("br");
br2.append(div_1);
 
let spl_input = document.createElement("input");
spl_input.setAttribute("type", "text");
spl_input.setAttribute("name", "Speciality");
spl_input.setAttribute("id", "Speciality");
spl_input.setAttribute("placeholder", "Enter Your Speciality");
spl_input.setAttribute("title", "username is cannot contain space or only minimum 2");
spl_input.setAttribute("pattern", "[A-Za-z]");
spl_input.setAttribute("required", "");
spl_input.setAttribute("disabled", "");
spl_input.append(div_1);

let b2 = document.createElement("br");
b1.append(div_1);

let b21 = document.createElement("br");
b11.append(div_1);

//next

let d_exp =  document.createElement("label");
d_exp.setAttribute("for", "Experience");
d_exp.innerText = "Experience";
d_exp.append(div_1);

let br3 = document.createElement("br");
br3.append(div_1);
 
let exp_input = document.createElement("input");
exp_input.setAttribute("type", "text");
exp_input.setAttribute("name", "Experience");
exp_input.setAttribute("id", "Experience");
exp_input.setAttribute("placeholder", "Enter Your Experience");
exp_input.setAttribute("title", "username is cannot contain space or only minimum 2");
exp_input.setAttribute("pattern", "[A-Za-z0-9]");
exp_input.setAttribute("required", "");
exp_input.setAttribute("disabled", "");
exp_input.append(div_1);

let b3 = document.createElement("br");
b3.append(div_1);

let b31 = document.createElement("br");
b11.append(div_1);

//next

let d_qln =  document.createElement("label");
d_qln.setAttribute("for", "Qualifications");
d_qln.innerText = "Qualifications";
d_qln.append(div_1);

let br4 = document.createElement("br");
br4.append(div_1);
 
let qln_input = document.createElement("input");
qln_input.setAttribute("type", "text");
qln_input.setAttribute("name", "Qualifications");
qln_input.setAttribute("id", "Qualifications");
qln_input.setAttribute("placeholder", "Enter Your Qualifications");
qln_input.setAttribute("title", "username is cannot contain space or only minimum 2");
qln_input.setAttribute("pattern", "[A-Za-z]");
qln_input.setAttribute("required", "");
qln_input.setAttribute("disabled", "");
qln_input.append(div_1);

let b4 = document.createElement("br");
b4.append(div_1);

let b41 = document.createElement("br");
b41.append(div_1);

//next

let d_email =  document.createElement("label");
d_email.setAttribute("for", "email");
d_email.innerText = "Email";
d_email.append(div_1);

let br5 = document.createElement("br");
br5.append(div_1);
 
let email_input = document.createElement("input");
email_input.setAttribute("type", "email");
email_input.setAttribute("name", "email");
email_input.setAttribute("id", "email");
email_input.setAttribute("placeholder", "Enter Your email");
email_input.setAttribute("title", "username is cannot contain space or only minimum 2");
email_input.setAttribute("pattern", "^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
email_input.setAttribute("required", "");
email_input.setAttribute("disabled", "");
email_input.append(div_1);

let b5 = document.createElement("br");
b5.append(div_1);

let b51 = document.createElement("br");
b51.append(div_1);

let div_2 = document.createElement("div");
div_2.setAttribute("class", "div_2");
form.append(div_2);

//next

let add =  document.createElement("label");
add.setAttribute("for", "address");
add.innerText = "Address";
add.append(div_2);

let br6 = document.createElement("br");
br6.append(div_2);
 
let add_input = document.createElement("input");
add_input.setAttribute("type", "text");
add_input.setAttribute("name", "address");
add_input.setAttribute("id", "address");
add_input.setAttribute("placeholder", "Enter Your address");
add_input.setAttribute("title", "address is cannot contain space or only minimum 2");
add_input.setAttribute("pattern", "[A-Za-z0-9]");
add_input.setAttribute("required", "");
add_input.setAttribute("disabled", "");
add_input.append(div_2);

let b6 = document.createElement("br");
b5.append(div_2);

let b61 = document.createElement("br");
b61.append(div_2);

//next

let Pincode =  document.createElement("label");
Pincode.setAttribute("for", "Pincode");
Pincode.innerText = "Pincode";
Pincode.append(div_2);

let br7 = document.createElement("br");
br7.append(div_2);
 
let pin_input = document.createElement("input");
pin_input.setAttribute("type", "number");
pin_input.setAttribute("name", "Pincode");
pin_input.setAttribute("id", "Pincode");
pin_input.setAttribute("placeholder", "Enter Your Pincode");
pin_input.setAttribute("title", "Pincode is cannot contain space or only minimum 2");
pin_input.setAttribute("pattern", "[A-Za-z0-9]");
pin_input.setAttribute("required", "");
pin_input.setAttribute("disabled", "");
pin_input.append(div_2);

let b7 = document.createElement("br");
b7.append(div_2);

let b71 = document.createElement("br");
b71.append(div_2);

//next

let Phone =  document.createElement("label");
Phone.setAttribute("for", "phone");
Phone.innerText = "Phone";
Phone.append(div_2);

let br8 = document.createElement("br");
br8.append(div_2);
 
let phn_input = document.createElement("input");
phn_input.setAttribute("type", "number");
phn_input.setAttribute("name", "phone");
phn_input.setAttribute("id", "phone");
phn_input.setAttribute("placeholder", "Enter Your phone number");
phn_input.setAttribute("title", "phone is cannot contain space or only minimum 2");
phn_input.setAttribute("pattern", "[0-9]");
phn_input.setAttribute("required", "");
phn_input.setAttribute("disabled", "");
phn_input.append(div_2);

let b8 = document.createElement("br");
b8.append(div_2);

let b81 = document.createElement("br");
b81.append(div_2);

//next

let consult =  document.createElement("label");
consult.setAttribute("for", "Consultant");
consult.innerText = "Consultant Time";
consult.append(div_2);

let br9 = document.createElement("br");
br9.append(div_2);
 
let cons_input = document.createElement("input");
cons_input.setAttribute("type", "time");
cons_input.setAttribute("name", "time");
cons_input.setAttribute("id", "phone");
cons_input.setAttribute("placeholder", " Starting Time");
cons_input.setAttribute("title", " cannot contain space or only minimum 2");
cons_input.setAttribute("pattern", "");
cons_input.setAttribute("required", "");
cons_input.setAttribute("disabled", "");
cons_input.append(div_2);

let b9 = document.createElement("br");
b9.append(div_2);

let end_input = document.createElement("input");
end_input.setAttribute("type", "time");
end_input.setAttribute("name", "Endtime");
end_input.setAttribute("id", "Endtime");
end_input.setAttribute("placeholder", "Ending Time");
end_input.setAttribute("title", "cannot contain space or only minimum 2");
end_input.setAttribute("pattern", "");
end_input.setAttribute("required", "");
end_input.setAttribute("disabled", "");
end_input.append(div_2);

let b10 = document.createElement("br");
b8.append(div_2);

let b101 = document.createElement("br");
b81.append(div_2);