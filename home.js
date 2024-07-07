
// storage purpose
const storage = window.localStorage;

const nameContainer =document.getElementById('nameContainer');
const emailContainer = document.getElementById('emailContainer');

const {full_name, email} = storage;

nameContainer.innerText = full_name;
emailContainer.innerText = email;

const logoutUser = () => {
    storage.clear
    window.location.assign("register.html");
}

document.getElementById('logout').addEventListener('click', ()=>{
    logoutUser();
})
