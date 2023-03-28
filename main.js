let create_specs =[
    {
        "product_id": 94,
        "title": "Nerdlane",
        "image": "https://iili.io/HhRY6mu.webp",
        "small_img1": "https://iili.io/HhRcC6Q.webp",
        "small_img2": "https://iili.io/HhRYZqQ.webp",
        "small_img3": "https://iili.io/HhRcFwu.webp",
        "desc": "Blue Full Frame Rectangle Women Eyeglasses FullFrame",
        "rupees": "1500"
    }
]

if(localStorage.getItem("create_specs")){
    // return;
    console.log("sdgdvf");
}
else{
    localStorage.setItem("create_specs", JSON.stringify(create_specs));
    console.log("yes");
}

