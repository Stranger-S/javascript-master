let light = document.querySelector('#light');
function setLight() {
    document.querySelector('link').href = 'light.css';
}
light.onclick = setLight;
//------
let dark = document.querySelector('#dark');
function setDark() {
    document.querySelector('link').href = 'dark.css';
}
dark.onclick = setDark;
