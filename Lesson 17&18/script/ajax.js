
function ajax(url, method, functionName, dataArray){
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(dataArray);

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            functionName(this);
        }
    }
}

function requestData(dataArray){
    let out = ' ';
    for(let key in dataArray){
        out += `${key}=${dataArray[key]}&`;
    }
    return out;
}

function f1(data){
    console.log(data);
}

let a = {
    "name" : "sergey",
    "last-name" : "taranenko",
    "age" : 25
}

ajax('back.php', 'post', f1, requestData(a))