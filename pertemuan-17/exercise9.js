//Exercise #09
// 1. Promise

function helloWorld() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Hello World!"); 
        }, 2000);
    });
}

async function messages() {
    let msg = await helloWorld(); 
    console.log(msg); 
}

messages();


// 2. Fetch
function ambilDataUser() {
    fetch("https://reqres.in/api/users") 
        .then(function(response) {
            return response.json(); 
        })
        .then(function(users) {
            users.data.forEach(function(user) {
                let email = user.email; 
                console.log(email); 
            });
        });
}

ambilDataUser(); 


// 3. Async Await

async function ambilDataUser() {
    try {
        let response = await fetch("https://reqres.in/api/users"); 
        let users = await response.json();

        users.data.forEach(function(user) {
            let email = user.email; 
            console.log(email); 
        });
    } catch (error) {
        console.log("Terjadi kesalahan:", error); 
    }
}

ambilDataUser(); 


// 4. Axios

function ambilDataUser() {
    axios.get("https://reqres.in/api/users")
        .then(function(response) {
            response.data.data.forEach(function(user) {
                let email = user.email;
                console.log(email);
            });
        })
        .catch(function(error) {
            console.log("Terjadi kesalahan:", error);
        });
  }
  
  ambilDataUser(); 
  

