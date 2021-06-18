<?php 
    if(!isset($_COOKIE['email']) OR trim($_COOKIE['email']) == '') {
        header("Location: index.html");
        exit;
    }
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson-20</title>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link rel="stylesheet" href="css/chips.css">
    <link rel="stylesheet" href="css/style.css">

</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col l12 center">
                <h2>Личный кабинет</h2>
            </div>
            <div class="col l12 center">
                <button class="waves-effect waves-light btn-large light-green darken-2" id="logout"><i class="material-icons right">logout</i>Выйти</button><hr>
            </div>
        </div>  
    </div>
    
    <form>
        <div class="container">
            <div class="row">
                <div class="input-field col l6 ">
                    <input name="name" id="update-name" type="text" class="validate">
                    <label class="active" for="update-name">Имя</label>
                </div>
                <div class="input-field col l6 ">
                    <input name="second-name" id="update-second-name" type="text" class="validate">
                    <label class="active" for="update-second-name">Фамилия</label>
                </div>
                <div class="input-field col l6">
                    <input name="pass" id="update-pass" type="text" class="validate">
                    <label class="active" for="update-pass">Пароль</label>
                </div>
                <div class="input-field col l6">
                    <input name="birthday" id="update-birthday" type="text" class="validate datepicker">
                    <label class="active" for="update-birthday">Дата Рождения</label>
                </div>
                <div class="col l6 left flex_sex">
                    <p>
                        <label>
                            <input name="group1" type="radio" value="male" name="sex" class="sex with-gap"/>
                            <span>Мужчина</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" type="radio" value="female" name="sex" class="sex with-gap"/>
                            <span>Женщина</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" type="radio" value="other" name="sex" class="sex with-gap"/>
                            <span>Другое</span>
                        </label>
                    </p>
                </div>
                <div class="col l6 right button_update">
                    <button value="update" id="update-submit" class="waves-effect waves-light btn-large light-green darken-2"><i class="material-icons left">autorenew</i>Обновить</button>
                </div>
            </div>  
        </div>
    </form>
    
    <script src="js/materialize.min.js"></script>
    <script src="script/ajax.js"></script>
    <script src="script/logout.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/chips.js"></script>
</body>
</html>