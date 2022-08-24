const inputConfirm = document.querySelector('#cpassword')
const inputPassword = document.querySelector('#password')
const btn = document.querySelector('#create')

btn.addEventListener("click", () => {
    if (inputPassword.value != inputConfirm.value ){
        inputConfirm.setCustomValidity("Invalid field.");
    } else {
        inputConfirm.setCustomValidity("");
    }
})