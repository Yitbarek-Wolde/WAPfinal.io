//email and password from the sign up form

let email1=document.getElementById('inputEmail')
let pw=document.getElementById('inputPassword')

//storing input from sign up page

function Store(){
 localStorage.setItem('email1',email1.value)
 localStorage.setItem('pw',pw.value)
}

function Loginsubmit(){
//store data from sign up page
storedemail=document.localStorage.getItem("email1")

storedpw=document.localStorage.getItem("pw")
//entered data from the log in form
  let inputEmail=document.getElementById("inputEmail")
  let inputPassword=document.getElementById("inputPassword")
//check if stored data from sign up page is equal to data form log in page
  if(inputEmail.value==storedemail || inputPassword.value==storedpw){

      window.location.href ="login.html"
  }

  else {
      alert("Access Denied")
  }

}

// function NavFuction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }