

const SignUpForm = document.getElementById("SignUpForm");
const btnSignUp = document.getElementById("btnSignUp")

const userData = {};
btnSignUp.addEventListener("click", () => {
    
    const nname = document.getElementById("Name").value;
    const surname = document.getElementById("Surname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

   
    

    const userData = {
        name:nname,
        surname:surname,
        username: username,
        email: email,
        password: password,
    };
    const userDataJSON = JSON.stringify(userData);
        function setCookie(name, value, daysToExpire) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    const cookieValue = `${name}=${encodeURIComponent(
        value
    )}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
    }
    setCookie("userData", userDataJSON, 30);

    if (password === confirmPassword) {
        
        window.location.href = "../Pages/userLogged.html";

    }
    document.getElementById("SignUpForm").reset();
});





