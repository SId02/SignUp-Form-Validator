const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

function showError({parentElement}, message) {
    const formControl = parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

function showSuccess({parentElement}) {
    const formControl = parentElement;
    formControl.className = 'form-control success';
}

function CheckEmail(email){
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(re.test(String(email).toLowerCase())){
        showSuccess(input);
    }else{
        showError(input,'Email is Not Valid')
    }
}


function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showSuccess(input)
        }
    });

}

function getFieldName({id}) {
    return id.charAt(0).toUpperCase() + id.slice(1);
}

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} Character`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max} Character`);
    }else{
        showSuccess(input);
    }
}

function checkPass({value}, input2) {
    if(value != input2.value){
        showError(input2,'Password Do Not Mached');
    }
}

form.addEventListener('submit',e => {
    e.preventDefault();
    checkRequired([username, email, password, confirmPassword]);
    checkLength(username,3,50);
    checkLength(password,8,30);
    CheckEmail(email);
    checkPass(password, confirmPassword);
})






/* 

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function CheckEmail(email){
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(re.test(String(email).toLowerCase())){
        showSuccess(input);
    }else{
        showError(input,'Email is Not Valid')
    }
}


function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showSuccess(input)
        }
    });

}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} Character`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max} Character`);
    }else{
        showSuccess(input);
    }
}

function checkPass(input1,input2){
    if(input1.value != input2.value){
        showError(input2,'Password Do Not Mached');
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username, email, password, confirmPassword]);
    checkLength(username,3,50);
    checkLength(password,8,30);
    CheckEmail(email);
    checkPass(password, confirmPassword);
})


































*/