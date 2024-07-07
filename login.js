
// storage purpose
const storage = window.localStorage;

// autocomplete="off"
const inputs = document.getElementsByTagName('input')
for(let i=0; i<inputs.length; i++) {
    inputs[i].autocomplete = "off";
}

// registration form validation
document.getElementById('login').addEventListener('click', (event)=>{
    event.preventDefault();
})

const fullname = document.getElementById('fullname');
const mailId = document.getElementById('email');

const incorrectError = document.getElementById('incorrectError');
const notFoundError = document.getElementById('notFoundError');

const validateEmail = (email) => {
    const value = email.value;
    if(!(""+value).includes("@") || !(""+value).includes(".com")){
        emailError.style.display = "block";
    }else{
        emailError.style.display = "none";
    }
}

const validateAllInpputs = () => {
    if(fullname.value.length==0 ||
       email.value.length==0
    ) {
        return false
    }
}

const loginUser = () => {
    if(validateAllInpputs() === false){
        alert("Please provide all the details");
    }else{
        const fname = fullname.value;
        const mail = mailId.value;
        const  {full_name, email} = storage;

        if((fname === full_name && mail !== email) || (fname !== full_name && mail === email)){
            incorrectError.style.display = "block";
            setTimeout(()=>{
                incorrectError.style.display = "none";
            }, 2000);
        }
        else if(fname !== full_name && mail !== email){
            notFoundError.style.display = "block";
            setTimeout(()=>{
                notFoundError.style.display = "none";
            }, 3000);
        }else{
            window.location.assign("home.html");
        }
    }
}

document.getElementById('register').addEventListener('click', ()=>{
    window.location.assign('register.html');
})
