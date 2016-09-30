'use strict';

function submitPersonalInformation() {
    for (var i = 0; i < document.forms["newUser"].length-2 ;i++) {
        if (document.forms["newUser"].elements[i].value == "" || document.forms["newUser"].elements[i].value == null) {
            document.forms["newUser"].elements[i].classList.add('errorField');
            document.forms["newUser"].elements[i].nextElementSibling.innerHTML = "Це поле не може бути порожнім.";
        }
        else {
            document.forms["newUser"].elements[i].classList.remove('errorField'); 
            document.forms["newUser"].elements[i].nextElementSibling.innerHTML = "";
        }
    }
}

function submitAuthorizedUser(){
    console.log('hello!');
}

function checkingClass(id, This){
    //console.log(id, This);
    if(id==="newUser"){   
        if (document.getElementById('AuthorizedUser').classList.contains('show')===false){  
            This.classList.toggle('active');       
            document.getElementById(id).classList.toggle('show');
        }
        else {
            This.nextElementSibling.classList.toggle('active');
            This.classList.toggle('active');
            document.getElementById('AuthorizedUser').classList.toggle('show');
            document.getElementById(id).classList.toggle('show');
        }
    }
    else {
        if (document.getElementById('newUser').classList.contains('show')===false){  
            This.classList.toggle('active');       
            document.getElementById(id).classList.toggle('show');
        }
        else {
            This.previousElementSibling.classList.toggle('active');
            This.classList.toggle('active');
            document.getElementById('newUser').classList.toggle('show');
            document.getElementById(id).classList.toggle('show');
        }
    }
}