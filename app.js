const btn = document.querySelector('#btn')
const result = document.querySelector('.p')

const calculateAge = () => {

    let userDOB = document.querySelector('#input').value
    let userBirthYear = new Date(userDOB).getFullYear()
    const currentYear = new Date().getFullYear()
    const userAge = currentYear - userBirthYear
    console.log(`User Age : ${userAge}`)
    if(userAge >= 0){
        result.innerHTML = `Your Age is ${userAge}`
    }
    else if(userAge < 0){
        alert("Enter Correct date of Birth")
    }
    else{
        result.innerHTML = `Enter Your DOB to know your age`
    }
}
btn.addEventListener('click', calculateAge)