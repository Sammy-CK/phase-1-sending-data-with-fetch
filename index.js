function submitData (userName, userEmail){

  let newUser = {
    name : userName,
    email : userEmail
  }

 return fetch('http://localhost:3000/users',
  {
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
      Accept : "application/json"
    },
    body : JSON.stringify(newUser)
  })
  .then(resp => resp.json())
  .then(data => {
    let body = document.querySelector('body')
    body.append(data.id)
    console.log(data.id)
  })
  .catch(error => {
    let body = document.querySelector('body')
    body.append(error.message);
  })


}


submitData("Sammy", "star@gmail.com")
submitData("Sammy", "star@gmail.com")