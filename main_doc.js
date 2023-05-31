let doctor_login = [
  
    
[
    {
        "id": 0,
        "user_name": "AnandSebastian",
        "password": "Anand@123",
        "email": "jaleelasheik123@gmail.com",
        "address": "east car street, madurai",
        "phone": "",
        "Pincode": "1234567",
        "Country": "",
        "Speciality": "ophthalmologist",
        "Experience": "12",
        "Qualifications": " MBBS, MS Ophthalmology, DO, FICO",
        "Contact": "0987654321",
        "StartTime": "10:00",
        "EndTime": "01:15",
        "img_url": "https://iili.io/HSDpBfe.jpg"
    },
    {
        "id": 1,
        "user_name": "Arul",
        "password": "Arul@123",
        "email": "arul@gmail.com",
        "address": "123,abc gmail",
        "phone": "",
        "Pincode": "2345678",
        "Country": "",
        "Speciality": "ophthalmologist",
        "Experience": "8 years",
        "Qualifications": "MBBS, MS - Ophthalmology, Eye surgeon",
        "Contact": "09876543",
        "StartTime": "02:00",
        "EndTime": "05:00",
        "img_url": "https://iili.io/HSDpRWP.jpg"
    },
    {
        "id": 2,
        "user_name": "Arathy",
        "password": "Arathy@123",
        "email": "aarathy@123gmail.com",
        "address": "5/25, abc street, chennai",
        "phone": "",
        "Pincode": "765432",
        "Country": "",
        "Speciality": "ophthalmologist",
        "Experience": "3 years",
        "Qualifications": "MBBS, BSc Optometry",
        "Contact": "123456789",
        "StartTime": "02:00",
        "EndTime": "06:00",
        "img_url": "https://iili.io/HSDpa0g.jpg"
    },
    {
        "id": 3,
        "user_name": "AdithyaGorpande",
        "password": "Aadhi12@1",
        "email": "aadhi@123gmail.com",
        "address": "12 main road chennai",
        "phone": "",
        "Pincode": "876543",
        "Country": "",
        "Speciality": "ophthalmologist",
        "Experience": "4 years",
        "Qualifications": " MBBS, MS Ophthalmology, DO",
        "Contact": "987654323",
        "StartTime": "10:00",
        "EndTime": "12:30",
        "img_url": "https://iili.io/HSDpVzN.jpg"
    },
    {
        "id": 4,
        "user_name": "Anand",
        "password": "Aanand12",
        "email": "aanand@gmail.com",
        "address": "1/2 periar street, MGR road",
        "phone": "",
        "Pincode": "7654567",
        "Country": "",
        "Speciality": "ophthalmologist",
        "Experience": "8 years",
        "Qualifications": " MBBS, MS Ophthalmology, FICO",
        "Contact": "9876543268",
        "StartTime": "09:00",
        "EndTime": "12:30",
        "img_url": "https://iili.io/HSDpedG.jpg"
    }
    
]


]




if (localStorage.getItem("doctor_login")) {
  // return;
  console.log("sdgdvf");
} else {
  localStorage.setItem("doctor_login", JSON.stringify(doctor_login));
  console.log("yes");
}
