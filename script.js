const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");

const passwords = document.getElementsByClassName('.password');

pass.addEventListener("keyup", () => {
    console.log('hi');
    if (pass.value != cpass.value) {
        console.log('no')
        pass.classList.add('match-error');
        cpass.classList.add('match-error')
    }
})

cpass.addEventListener("keyup", () => {
    console.log('hi');
    if (pass.value != cpass.value) {
        console.log('no')
        pass.classList.add('match-error');
        cpass.classList.add('match-error')
    }
})

pass.addEventListener("keyup", () => {

    if (pass.value == cpass.value) {
        console.log('yes')
        pass.classList.remove('match-error');
        cpass.classList.remove('match-error')
    }
})

cpass.addEventListener("keyup", () => {
    if (pass.value == cpass.value) {
        console.log('yes')
        pass.classList.remove('match-error');
        cpass.classList.remove('match-error')
    }
})