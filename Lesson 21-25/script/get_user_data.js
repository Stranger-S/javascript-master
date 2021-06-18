document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {
        "format" : "dd.mm.yyyy",
    });
});

let userEmail = getCookie('email');
//console.log(userEmail);
ajax('core/get_user_data.php', 'POST', getUserData, {"email" : userEmail});

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i =0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUserData (result) {
    //console.log(result);
    result = JSON.parse(result);
    document.querySelector('#update-name').value = result.name;
    document.querySelector('#update-second-name').value = result.secondname;
    document.querySelector('#update-pass').value = result.password;
    document.querySelector('#update-birthday').value = result.birthday;
    let sex = document.querySelectorAll('.sex');
    for(let i = 0; i < sex.length; i++){
        if(sex[i].value == result.sex){
            sex[i].checked = sex[i].value;
            break;
        }
    };
    M.updateTextFields();
}

document.querySelector('#update-submit').onclick = function(event) {
    event.preventDefault();
    let sex = document.querySelectorAll('.sex');
    for(let i = 0; i < sex.length; i++){
        if(sex[i].checked){
            sex = sex[i].value;
            break;
        }
    }
    let updateData = {
        "email" : userEmail,
        "name" : document.querySelector('#update-name').value,
        "secondname": document.querySelector('#update-second-name').value,
        "pass" : document.querySelector('#update-pass').value,
        "birthday" : document.querySelector('#update-birthday').value,
        "sex" : sex,
    };
    ajax('core/update_user_data.php', 'POST', updateUserData, updateData);
}

function updateUserData (result) {
    //console.log(result);
    if(result == 1){
        //alert("Данные успешно обновлены!");
        //M.toast({html: 'Данные успешно обновлены!'});
        chips('Данные успешно обновлены!', '3000', 'succes');
    }else{
        //alert("Ошибка обновления данных!");
        //M.toast({html: 'Ошибка обновления данных!'});
        chips('Ошибка обновления данных!','3000','wrong');
    }
}