const password = document.querySelector('#password')
const confirm = document.querySelector('#confirm')

function Validate(){
    if(password !== confirm){
        alert('Passwords do not match')
        return false
    }
    return true
}