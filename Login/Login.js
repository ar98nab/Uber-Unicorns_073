let form = document.querySelector(".form")

async function handleform(event) {
  event.preventDefault()
  let email = event.target[0].value;
  let password = event.target[1].value;
  let usercredentials = {
    email,
    password
  }
  try {
    let alldata= await fetch("  http://localhost:3000/user")
     let token=await alldata.json()
     console.log(token)
      let narr=token.filter((ele)=>{
        return (ele.email===usercredentials.email && ele.password===usercredentials.password)
      })
      showdata(narr)
  }
  catch (error) {
    alert("error")
  }
}

function showdata(arr){
  if(arr.length!=0){
    window.location.href="http://127.0.0.1:5500/Uber-Unicorns_073/Melodify.html"
  }
  else{
    alert("Please Signup")
  }
}


form.addEventListener("submit", (event) => {
  handleform(event)
})

