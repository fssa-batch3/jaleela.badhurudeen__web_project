


const submitbtn=document.getElementById("form");
submitbtn.addEventListener("submit",(e)=>{

    e.preventDefault()
    create()
})



        function create() {

           
            const name = document.getElementById("Name").value.trim();
            console.log(name);
            const doc_email = document.getElementById("email").value.trim();
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
                "doc_name": name,
                "Speciality": Speciality,
                "doc_email": doc_email,
                "Qualifications": Qualifications,
                "Experience": Experience,
                "Contact": Contact,
                "image": image,
                "StartTime" : StartTime,
                "EndTime" : EndTime,
                
            } 
            arr.push(doc_object)
            localStorage.setItem("doctor",JSON.stringify(arr))
            localStorage.setItem("active_user",JSON.stringify(doc_object))

window.location.href="../facilities/doctor.html";
        }



