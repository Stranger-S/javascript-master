document.querySelector('#signup-submit').onclick = function(event) {
    event.preventDefault();
    let name = document.querySelector('#signup-name').value;
    let secondName = document.querySelector('#signup-second-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let email = document.querySelector('#signup-email').value;
    let birthday = document.querySelector('#signup-birthday').value;
    let sex = document.querySelectorAll('.sex');
    for(let i = 0; i < sex.length; i++){
        if(sex[i].checked){
            sex = sex[i].value;
            break;
        }
    }

    let data = {
        "name" : name,
        "secondname" : secondName,
        "pass" : pass,
        "email" : email,
        "birthday" : birthday,
        "sex" : sex,
    }
    
    ajax('core/signup.php', 'POST', signup, data);
    
    function signup(result){
        //console.log(result);
        if(result == 2){
            //alert('Заполните все поля!');
            chips('Заполните все поля!','3000','wrong');
        }else if(result == 1){
            //alert('Поздравляем, вы успешно зарегистрированы!');
            chips('Поздравляем, вы успешно зарегистрированы!', '3000', 'succes');
            document.querySelector('#signup').parentElement.classList.add('close');
            document.querySelector('#signup').classList.add('close');
        }else {
            //alert('Повторите регистрацию позже!');
            chips('Повторите регистрацию позже!','3000','wrong');
        }
    }
}
//--------------------------
document.querySelector('#login-submit').onclick = function(event) {
    event.preventDefault();
    let pass = document.querySelector('#login-pass').value;
    let email = document.querySelector('#login-email').value;

    let data = {
        "pass" : pass,
        "email" : email,
    }
    
    ajax('core/login.php', 'POST', login, data);
    
    function login(result){
        if(result == 2){
            //alert('Заполните все поля!');
            chips('Заполните все поля!','3000','wrong');
        }else if(result == 0){
            //alert('Такой пользователь не найден!');
            chips('Такой пользователь не найден!','3000','wrong');
        }else {
            console.log(result);
            result = JSON.parse(result);
            let d = new Date();
            d.setTime(d.getTime() + (60*60*1000));
            let expires = d.toUTCString();
            document.cookie = `email=${result.email}; expires=${expires} path=/`;
            location.href="cabinet.php";
        }
    }
}

