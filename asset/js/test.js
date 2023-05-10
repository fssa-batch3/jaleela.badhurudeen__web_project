
const test = document.querySelectorAll(".tester")
console.log(test);

const btn = document.getElementById("confirm")

btn.addEventListener("click",function () {
    let tester = []
    for(let i = 0; i < test.length;i++){
            if (test[i].checked === true) {
               tester.push(test[i].id);
              
    
            }    
    }
    // console.log(tester);

    if (tester[0] === "red" || tester[1] === "red" || tester[0] === "green" || tester[1] === "green") {
        window.location.href = "../../../pages/facilities/your_vision.html"
    }
    else if(tester[0] === "both" && tester[1] === "both"){
        window.location.href = "../../../pages/facilities/your_vision_2.html"
    } 
    else if(tester[0] === undefined && tester[1] === undefined) {
        console.log(alert("please select anyone"))
    }
    
})
