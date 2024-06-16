



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