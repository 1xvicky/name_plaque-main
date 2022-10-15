// Project on arrow functions
const buyNow = () =>{

  const usrInput = document.querySelector('.field-input')
  if (usrInput.value.length>15){
    alert("too long")
  }
  else{
    if (usrInput.value===""){
      alert("Please enter name")
    }
    else if(usrInput.value==="Your Name"){
      alert("Please enter your unique letters")
  
    }
    else{
      alert("Success")
    }
  }
  
  
  }
but.addEventListener("click", buyNow);
