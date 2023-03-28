let create_specs =[
    [
        {
            "product_id": 94,
            "title": "Nerdlane",
            "image": "https://iili.io/HhRY6mu.webp",
            "small_img1": "https://iili.io/HhRcC6Q.webp",
            "small_img2": "https://iili.io/HhRYZqQ.webp",
            "small_img3": "https://iili.io/HhRcFwu.webp",
            "desc": "Blue Full Frame Rectangle Women Eyeglasses FullFrame",
            "rupees": "1500"
        },
        {
            "product_id": 44,
            "title": "IZIBUKO",
            "image": "https://iili.io/HhRcPix.webp",
            "small_img1": "https://iili.io/HhRcQUB.webp",
            "small_img2": "https://iili.io/HhRcPix.webp",
            "small_img3": "https://iili.io/HhRlqOX.webp",
            "desc": "Pink Full Frame Rectangle",
            "rupees": "1000"
        },
        {
            "product_id": 34,
            "title": "ALFProduct",
            "image": "https://iili.io/HhR0dhu.webp",
            "small_img1": "https://iili.io/HhR0nkP.webp",
            "small_img2": "https://iili.io/HhR0REv.webp",
            "small_img3": "https://iili.io/HhRlqOX.webp",
            "desc": "Black and Blue Full Frame Rectangle",
            "rupees": "990"
        }
    ]
]

if(localStorage.getItem("create_specs")){
    // return;
    console.log("sdgdvf");
}
else{
    localStorage.setItem("create_specs", JSON.stringify(create_specs));
    console.log("yes");
}

