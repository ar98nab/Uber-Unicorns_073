

async function getdata() {
    let res = await fetch(`http://localhost:3000/user`);
    let data = await res.json();
    console.log(data);
  }


  let form=document.querySelector("form");

  form.addEventListener("submit", (event)=>{addData(event)});

  function addData (event){

    event.preventDefault();

      let email=event.target[email].value
      let password=event.target[1].value
      let name=event.target[2].value
      let year =event.target[3].value
      let month = event.target[4].value
      let date=event.target[5].value
      let gender=event.target[6].value
      

      let obj={
        email , password , name , year , month , date , gender
      }

      console.log(obj);
  }