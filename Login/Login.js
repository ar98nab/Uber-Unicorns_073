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
    let await fetch("")
     
     let token=await usercredentials.json()

  }
  catch (error) {
    alert("error")
  }
}
form.addEventListener("submit", (event) => {
  handleform(event)
})
