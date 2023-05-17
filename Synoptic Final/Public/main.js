
//Login system
const loginForm = document.getElementById("login");
const loginButton = document.getElementById("submit");

loginButton.addEventListener("click", (mouseevent) => {
    mouseevent.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username == "user" && password == "password") {
        alert("You have successfully logged in!");
        window.location.replace("UserView.html");
    } else {
        alert("Incorrect login credentials!")
    }
})
//


//Logout function
function logout() {
    alert("You have successfully logged out and will now be returned to the homepage");
    window.location.replace("Homepage.html");
}


function back(){
    window.location.replace("UserView.html");
}

function redirectthankyou(){
    window.location.replace("success.html");
}
