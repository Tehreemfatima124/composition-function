document.getElementById('login-container').addEventListener('submit', function(event){
    event.preventDefault();



    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Fetch the users.json file
    fetch('users.json') 
    .then(response =>{
        if(!response.ok){
            throw new Error ("Network respons was not oky");

        }
        return response.json();
    })
    .then(user =>{
        let isInvaileduser = false;
        for(let i = 0; i< user.length; i++){
            if(user[i].username === username && user[i].email === email){
            isInvaileduser = true;
            }
        }
        if(isInvaileduser){
            alert("success full login")
        }
        else{
            alert("not success full")
        }
    })
    .catch(Error=>{
        alert("No Fetch Data  ", Error)
    });

});





//         .then(response) {
//             if (response.ok) {
//                 return response.json(); // Parse the JSON data
//             } else {
//                 throw new Error('Fetch failed');
//             }
//         })
//         .then(function(data) {
//             // Check if any user matches the username and password
//             const user = data.find(user => user.username === username && user.password === password);
//             if (user) {
//                 alert('Login Successful!');
//                 document.getElementById('message').innerText = ''; // Clear any previous message
//             } else {
//                 document.getElementById('message').innerText = "Invalid Username or Password!";
//             }
//         })
//         .catch(function() {
//             document.getElementById('message').innerText = "Network Error!";
//         });
// };




