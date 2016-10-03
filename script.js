'use strict';

function checkingClass(id, This){
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

function checkMyForm(FormName){
    var checkingnumber ;
    var counteroferrors=0;
    if (FormName ==="AuthorizedUser"){
        checkingnumber =2;
    } else {
        checkingnumber =4;
    }

    for (var i = 0; i < document.forms[FormName].length-checkingnumber ;i++) {
        if (document.forms[FormName].elements[i].value == "" || document.forms["newUser"].elements[i].value == null) {
            document.forms[FormName].elements[i].classList.add('errorField');
            document.forms[FormName].elements[i].nextElementSibling.innerHTML = "Це поле не може бути порожнім.";
            counteroferrors++;
        }
        else {
            document.forms[FormName].elements[i].classList.remove('errorField'); 
            document.forms[FormName].elements[i].nextElementSibling.innerHTML = "";
            //console.log(document.forms[FormName].elements[i].getAttribute('data-pattern'));
            if(document.forms[FormName].elements[i].getAttribute('data-pattern') != null){
                var dataPattern = document.forms[FormName].elements[i].getAttribute('data-pattern');
                var pattern = new RegExp(dataPattern);
                
                if(pattern.test(document.forms[FormName].elements[i].value)){
                    document.forms[FormName].elements[i].classList.remove('errorField');

                } else {
                    document.forms[FormName].elements[i].classList.add('errorField');
                    document.forms[FormName].elements[i].nextElementSibling.innerHTML = "Неправильно заповнене поле.";
                    counteroferrors++;
                   }
            } else {
                   document.forms[FormName].elements[i].classList.remove('errorField');      
                                
            }
        } 

    }    
    if (counteroferrors>0){
        return false;
    } 
    else {
        return true;
    }
}

function getData(TypeOfUser){       //Перевірити чи є такий в наявності на сервері
               console.log(localStorage.getItem('userName'));
    if (TypeOfUser ==='AuthorizedUser'){
        if(localStorage.getItem('userName') == document.getElementById("AuthorizedUsername").value &&localStorage.getItem('userPassword') == document.getElementById("AuthorizedUserpasword").value){
            console.log('TRUE');
            alert("Ви ввійшли на наш сайт!");
        }
        else {
            if (localStorage.getItem('userName') != document.getElementById("AuthorizedUsername").value) {
                        alert("Вибачте, але користувача під таким ім'ям немає. Можливо Ви помилились. Спробуйте ще раз!");
                    }
            else {
                alert("Вибачте, але пароль введений невірно. Спробуйте ще раз!");
            }
                }
            }
    else {
                    if(localStorage.getItem('userName') == document.getElementById("name").value){
                        alert("Вибачте, але користувача під таким ім'ям уже є. Спробуйте ще раз, але піж імшим ім'ям!");
                    }
                    else {
                        alert("Ви ввійшли на наш сайт!");
                    }
                }
            }

function submitInformation(MyForm) {
    if(checkMyForm(MyForm)===true){     //перевірку пройдено
        console.log(MyForm);
        if(MyForm==='AuthorizedUser'){
            getData('AuthorizedUser');//+38 (067) 676-76-76
        }
        else {
            //Перевірити чи є такий в наявності на сервері
            getData('newUser');
           //новий користувач   додати до списку користуваців    <!--    local storage   зберігання інфи-->
            function saveData(){                
                // add item to local storage
                localStorage.setItem("userName", document.getElementById("name").value);
                localStorage.setItem("userPassword", document.getElementById("pasword").value);
                localStorage.setItem("userAge", document.getElementById("age").value);
                localStorage.setItem("userEmail", document.getElementById("email").value);
                if (document.getElementById("man").checked ===true) {
                    localStorage.setItem("userSex", "man");
                }
                else {
                    localStorage.setItem("userSex", 'woman');
                }
            }
            saveData();
        }
    }
}
