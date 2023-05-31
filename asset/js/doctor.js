


const submitbtn=document.getElementById("form");
submitbtn.addEventListener("submit",(e)=>{

    e.preventDefault()
    create()
})




        function create() {

            
           const img_url = document.getElementById("img_url").value.trim();
            const name = document.getElementById("Name").value.trim();
            console.log(name);
            const address = document.getElementById("address").value.trim();
            const email = document.getElementById("email").value.trim();
            const Speciality = document.getElementById("Speciality").value.trim();
            const Qualifications = document.getElementById("Qualifications").value.trim();
            const Experience = document.getElementById("Experience").value.trim();
            const Contact = document.getElementById("Contact").value.trim();
            const image = document.getElementById("image").value.trim();
            const StartTime = document.getElementById("StartTime").value.trim();
            const EndTime = document.getElementById("EndTime").value.trim();

            let arr = new Array();

            arr = JSON.parse(localStorage.getItem("doctor"))?JSON.parse(localStorage.getItem("doctor")):[]

  
            
            let doc_object = {

                "img_url" : img_url,
                "user_name": name,
                "email": email,
                "Speciality": Speciality,
                "address": address,
                "Qualifications": Qualifications,
                "Experience": Experience,
                "Contact": Contact,
                "image": image,
                "StartTime" : StartTime,
                "EndTime" : EndTime
                
            } 
            arr.push(doc_object)
            localStorage.setItem("doctor",JSON.stringify(arr))
            localStorage.setItem("active_user",JSON.stringify(doc_object))

window.location.href="../facilities/doctor.html";
        }



