function Loginsubmit(){

    let firstinput=document.getElementById("inputEmail")

    let secondinput=document.getElementById("inputPassword")

    let forminput=document.querySelector('form')

    if(firstinput.value=="sem" && secondinput.value=="pass11"){

        window.location.href ="home.html"
    }

    else {
        alert("Access Denied")
    }

}

function NavFuction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }