// async function req() {
//     const res=  await fetch("https://dummyjson.com/users");
//         const data=  await res.json();



//         console.log(data);


// }

// req();

// ----------------------------------------------

// async function sendReq() {
    
//     const res= await fetch("https://dummyjson.com/users");

//     const data= await res.json();

//     console.log(data);

//     const {users}=data;

//     console.log(users);

//     users.forEach(element => {

//         const li=createElement("li");
//         li.innerHTML=element.firstName;
        
        
//     });

// }

// sendReq();


// ---------------------------------------------

const btn= document.querySelector("btn");
const mode="light"
btn.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black"
    }
    else{
        mode="light"
         document.querySelector("body").style.backgroundColor="white"
    }

});




