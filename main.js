let create_specs =[

    {
           "image" : {"source" : "../../asset/images/computer_glasses/cg1.png","alt" :"image of computer_glass"},
           "name"  : "Nerdlane",
           "description" : "Blue Full Frame Rectangle",
           "amount" : 1500
       },
       {
           "image" :  {"source": "../../asset/images/computer_glasses/cgtwo1.png" , "alt":"image of computer glass"},
           "name"  : "IZIBUKO",
           "description" : "Blue Full Frame Rectangle",
           "amount" : 1000
       },
       {
           "image" : { "source" : "../../asset/images/computer_glasses/cgfour1.png","alt" : "image of computer_glass"},
           "name"  : "ALFProduct",
           "description" : "Blue Full Frame Rectangle",
           "amount" : 1100
       },
       {
           "image" : { "source" : "../../asset/images/computer_glasses/cg51.png","alt" : "image of computer_glass"},
           "name"  : "IZIBUKO",
           "description" : "Blue Full Frame Rectangle",
           "amount" : 1000
       },
       {
           "image" : { "source" : "../../asset/images/computer_glasses/cg61.png","alt" : "image of computer_glass"},
           "name"  : "Nerdlane",
           "description" : "Blue Full Frame Rectangle",
           "amount" : 900
       },
       {
           "image" : { "source" : "../../asset/images/computer_glasses/cg71.png","alt" : "image of computer_glass"},
           "name"  : "IZIBUKO",
           "description" : "Blue Full Frame Rectangle",
           "amount" : 1200
       },
       {
           "image" : { "source" : "../../asset/images/computer_glasses/cg81.png","alt" : "image of computer_glass"},
           "name"  : "ALFProduct",
           "description" : "Blue Full Frame Rectangle",
           "amount" : 999
       },
       {
           "image" : { "source" : "../../asset/images/computer_glasses/cg91.png","alt" : "image of computer_glass"},
           "name"  : "Nerdlane",
           "description" : "Blue Full Frame Rectangle",
           "amount" : 1500
       },
       {
           "image" : { "source" : "../../asset/images/computer_glasses/cg101.png","alt" : "image of computer_glass"},
           "name"  : "IZIBUKO",
           "description" : "Blue Full Frame Rectangle",
           "amount" : 1999
       },
       {
           "image" : { "source" : "../../asset/images/computer_glasses/cg111.png","alt" : "image of computer_glass"},
           "name"  : "ALFProduct",
           "description" : "Blue Full Frame Rectangle",
           "amount" : 899
       },
       {
           "image" : { "source" : "../../asset/images/computer_glasses/cg121.png","alt" : "image of computer_glass"},
           "name"  : "Nerdlane",
           "description" : "Blue Full Frame Rectangle",
           "amount" : 1500
       },
       {
           "image" : { "source" : "../../asset/images/computer_glasses/cg31.png","alt" : "image of computer_glass"},
           "name"  : "IZIBUKO",
           "description" : "Blue Full Frame Rectangle",
           "amount" : 1000
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

