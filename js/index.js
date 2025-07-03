// login code 

var loginbtn =document.getElementById("loginButton") 
var signupbtn=document.getElementById("signupButton") 

var users=[]

if (localStorage.getItem('users'))
{
    users=JSON.parse(localStorage.getItem("users"))
}

if(signupbtn)
{
    signupbtn.addEventListener('click', function(){

    var username1 = document.getElementById("name")
    var useremail = document.getElementById("email")
    var password1 = document.getElementById("password")
    var errorMsg= document.getElementById("message3")
    var doneMsg= document.getElementById("message1")
    var emailErrorMsg= document.getElementById("message2")
    
    doneMsg.classList.add("d-none")

    // check empty inputs
    if (username1.value.trim() === "" || useremail.value.trim() === "" || password1.value.trim() === "") {
        errorMsg.classList.remove("d-none")
        return
    }
    // existing email
    for (let i = 0; i < users.length; i++) {
        if(useremail.value==users[i].email)
        {
            emailErrorMsg.classList.remove("d-none")
            return

        }
    }


    var user={
        'name':username1.value,
        'email':useremail .value,
        'password':password1.value
    }
    users.push(user)
    localStorage.setItem('users',JSON.stringify(users))

    errorMsg.classList.add("d-none")
    doneMsg.classList.remove("d-none")
    emailErrorMsg.classList.add("d-none")


    username1.value=""
    password1.value=""
    useremail.value=""

})
}

var logged = false
if(loginbtn)
{
    loginbtn.addEventListener('click', function(){

    var useremail = document.getElementById("email") 
    var password= document.getElementById("password")
    var errorMsg= document.getElementById("message3")
    var doneMsg= document.getElementById("message1")
    var failMsg= document.getElementById("message2")

    if ( useremail.value.trim() === "" || password.value.trim() === "") {
        errorMsg.classList.remove("d-none")
        return

    }
    for (let i = 0; i < users.length; i++) {

            if (useremail.value ===users[i].email && password.value === users[i].password){
                doneMsg.classList.remove("d-none")
                errorMsg.classList.add("d-none")

                window.location.href = "html/dashboard.html";
                logged=true
                localStorage.setItem('loggedInUser', users[i].name)
                break
            }
    }
    if(!logged)
    {
        failMsg.classList.remove("d-none")
        errorMsg.classList.add("d-none")


    }
})
}

var loggedUsername = localStorage.getItem('loggedInUser')

if(loggedUsername)
{
    var welc= document.getElementById("welcome")
    welc.innerHTML =`welcome ${loggedUsername}`
}