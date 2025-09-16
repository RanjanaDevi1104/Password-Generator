let password = document.getElementById("main")
let heading = document.getElementById("head")
let page = document.getElementById("para")
let btn= document.getElementById("btn")
let btn2= document.getElementById("p1")
let outer = document.getElementById("Decrease")
let inner = document.getElementById("increase")
let value = document.getElementById("lengthvalue")





btn.addEventListener("click",()=>{
   let pass =["a","b","c","d",2,4,5,7,6,4,"#","@","$","%","&","*"]
  //  let passwordlength = 6;
   let password = "";
   for( i=0; i<passwordlength ; i++){
     let value = Math.floor(Math.random()*pass.length)
     password +=pass[value]
     passwordDisplay.innerText = password;
   }
console.log(password)
})



let passwordlength = 6;


increase.addEventListener("click",()=>{
  if(passwordlength < 20){
    passwordlength++;
    lengthvalue.innerText = passwordlength;
  } 
});

Decrease.addEventListener("click",()=>{
  if(passwordlength > 4){
    passwordlength--;
    lengthvalue.innerText = passwordlength;
  }
});



 btn.addEventListener("click",()=>{
  if(passwordlength > 8 ){
     passwordDisplay.style.color = "limegreen";
  }
  else if(passwordlength < 7 ){
   passwordDisplay.style.color = "yellow";
  }
  else{
    passwordDisplay.style.color = "white";
  }
  console.log(password)
 })
