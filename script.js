var namee = document.getElementById("namee")
var email = document.getElementById("email")
var password = document.getElementById("password")
var submit = document.getElementById("submit")
var checkBox = document.getElementById("checkBox")
var error1 = document.getElementById("nameError")
var error2 = document.getElementById("mailError")
var error3 = document.getElementById("pasError")


namee.addEventListener("input", function () {
    if (namee.value.trim() == "") {
        error1.textContent = "Name is required"
    }
    else {
        error1.textContent = ""
    }
    checkallfields();
})

email.addEventListener("input", function () {
    if (email.value.includes("@") && email.value.includes(".com")) {
        error2.textContent = ""
    }
    else {
        error2.textContent = "Enter a Valid Email Adress"
    }
    checkallfields();
})

password.addEventListener("input", function () {
    if (password.value.length < 6) {
        error3.textContent = "Password must conatin atleast 6 characters"
    }

    else {
        error3.textContent = ""
    }
    checkallfields();
})

checkBox.addEventListener("change", checkallfields);


function checkallfields() {
    if (namee.value.trim() !== "" &&
        email.value.includes("@") &&
        email.value.includes(".com") &&
        password.value.length >= 6 &&
        checkBox.checked
    ) {
        submit.disabled = false;
    }
    else {
        submit.disabled = true;
    }
}

submit.addEventListener("click", function(){
    alert("Registration Successful!!")
})

