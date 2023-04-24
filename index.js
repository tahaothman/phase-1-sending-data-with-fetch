// Add your code here
function submitData(name, email){
    return fetch("http://localhost:3000/users",{
        method : "POST",
        headers: {
            "content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(
            {name: name,
            email: email,
        }),
    }).then (res => res.json())
        .then(data => 
            {const newH2 = document.createElement('h3')
            document.querySelector('body').appendChild(newH2)
            document.querySelector("h3").innerHTML= data.id})
            .catch(function (error) {
                const newH4 = document.createElement('h4')
                document.querySelector('body').appendChild(newH4)
                document.querySelector("h4").innerHTML= error})
                
              
}