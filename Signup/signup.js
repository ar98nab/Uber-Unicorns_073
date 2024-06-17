



  let form=document.querySelector("form");

  form.addEventListener("submit", (event)=>{addData(event)});

  function addData (event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let date = document.getElementById("date").value;
    let gender = document.getElementById("gendertype").value;
      

      let obj={
        email , password , name , year , month , date , gender
      }

      fetch(`http://localhost:3000/user`,{

        method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
        },
    body:JSON.stringify(obj), // body data type must match "Content-Type" header
  })
    
  }



  let password = document.querySelector("#password");

let svg1 = document.querySelector("#svg1");
let svg2 = document.querySelector("#svg2");
let svg3 = document.querySelector("#svg3");

let togglePassword=document.querySelector("#togglePassword")

 
togglePassword.addEventListener("change", function() {
  if (togglePassword.checked) {
      password.setAttribute("type", "text");
  } else {
      password.setAttribute("type", "password");
  }
});


password.addEventListener("input", function() {
    checkpassword(password.value);
});

function checkpassword(password) {
    // Check for at least one letter
    if (/[a-zA-Z]/.test(password)) {
        svg1.setAttribute("fill", "green");
    } else {
        svg1.setAttribute("fill", "none");
    }
    
    // Check for at least one number or special character
    if (/[0-9!@#\$%\^\&*\)\(+=._-]+/.test(password)) {
        svg2.setAttribute("fill", "green");
    } else {
        svg2.setAttribute("fill", "none");
    }

    // Check if the password is at least 10 characters long
    if (password.length >= 10) {
        svg3.setAttribute("fill", "green");
    } else {
        svg3.setAttribute("fill", "none");
    }
}



document.addEventListener("DOMContentLoaded", function() {
  let email = document.querySelector("#email");
  let nextbut = document.querySelector("#submitbut");
  let nextbut2=document.querySelector("#submitbut2");
  let nextbut3=document.querySelector("#submitbut3");
  let name = document.querySelector("#name");


  nextbut.addEventListener("click", function() {
    checkNext(email.value);
  });

  function checkNext(email) {
    if (email.length >= 5) {
      let carousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
        interval: false
      });
      carousel.next();
    }
    else{
      alert("enter your email")
    }
  }


  nextbut2.addEventListener("click", function() {
    checkNext2(password.value);
  });

  function checkNext2(password) {
    if (password.length >= 8) {
      let carousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
        interval: false
      });
      carousel.next();
    }
    else{
      alert("enter your password")
    }
  }

  nextbut3.addEventListener("click", function() {
    checkNext3(name.value);
  });

  function checkNext3(name) {
    if (name.length >= 3) {
      let carousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
        interval: false
      });
      carousel.next();
    }
    else{
      alert("please Enter your Data")
    }
  }

});
