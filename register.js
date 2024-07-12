
// storage purpose
const storage = window.localStorage;

// autocomplete="off"
const inputs = document.getElementsByTagName('input')
for(let i=0; i<inputs.length; i++) {
    inputs[i].autocomplete = "off";
}

// registration form validation
document.getElementById('submit').addEventListener('click', (event)=>{
    event.preventDefault();
})

const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const mobileNumber = document.getElementById('phone');
const birthdate = document.getElementById('birthday');
const gender = document.getElementById('');
const address = document.getElementById('address');
const country = document.getElementById('country');
const postal_code = document.getElementById('postal_code');
const submit = document.getElementById('submit');

const emailError = document.getElementById('emailError');
const mobileError = document.getElementById('mobileError');
const dateError = document.getElementById('dateError');
const postalError = document.getElementById('postalError');

const validateEmail = (email) => {
    const value = email.value;
    if(!(""+value).includes("@") || !(""+value).includes(".com")){
        emailError.style.display = "block";
    }else{
        emailError.style.display = "none";
    }
}

const validateMobile = (mobile) => {
    const number = mobile.value;
    if(number.length < 10){
        mobileError.style.display = "block";
    }else{
        mobileError.style.display = "none";
    }
}

const validateDate = (date) => {
    const birthdate = new Date(date.value);
    const presentDate = new Date();
    const age = presentDate.getFullYear() - birthdate.getFullYear();
    if(age < 10){
        dateError.style.display = "block";
    }else{
        dateError.style.display = "none";
    }
}

const validatePostalCode = (postal_code) => {
    const code = postal_code.value;
    if(code.length < 6 || code.length > 6){
        postalError.style.display = "block";
    }else{
        postalError.style.display = "none";
    }
}

const validateAllInpputs = () => {
    if(fullname.value.length==0 ||
       email.value.length==0 ||
       mobileNumber.value.length==0 ||
       birthdate.value.length==0 ||
       address.value.length==0 ||
       country.value.length==0 ||
       postal_code.value.length==0
    ) {
        return false
    }
}

const saveRegistrationData = () => {    
    if(validateAllInpputs() === false){
        const warningContainer = document.getElementById('warning-container');
        warningContainer.style.display = "flex";
        setTimeout(()=>{
            warningContainer.style.display = "none";
        }, 2000);
    }else{
        storage.setItem("full_name", fullname.value);
        storage.setItem("email", email.value);
        
        const inputs = document.getElementsByTagName('input');
        for(let i=0; i<inputs.length; i++) {
            inputs[i].value = "";
            if(inputs[i].type == 'radio')
                inputs[i].checked = false;
        }
        
        window.location.assign("login.html");
    }
}
