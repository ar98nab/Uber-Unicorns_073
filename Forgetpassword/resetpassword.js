let form = document.querySelector(".form")

async function handleform(event) {
    event.preventDefault()
    let newpassword = event.target[0].value;
    let usercredentials = {
        newpassword
    }
     
    let userreset=JSON.parse(localStorage.getItem("resetuser"))
    let response=userreset.map((ele)=>{
        return ele.id
    })
      let userid=response[0]
      console.log(userid)
    try {
        let narr = await fetch(`http://localhost:3000/user/${userid}`, {
            method: 'PATCH',
            headers: {
                "Content-type": `application/json`
            },
            body: JSON.stringify({
                password: usercredentials.newpassword
            })
        })
         alert("Dear Customer,You have successfully reset your password")
    }
    catch (error) {
        alert("error")
    }

}

form.addEventListener("submit", (event) => {
    handleform(event)
})
let password = document.querySelector("#aremail");

let togglePassword=document.querySelector("#togglePassword")

togglePassword.addEventListener("change", function() {
  if (togglePassword.checked) {
      password.setAttribute("type", "text");
  } else {
      password.setAttribute("type", "password");
  }
});
