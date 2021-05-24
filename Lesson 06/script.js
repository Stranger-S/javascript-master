function addSongs() {
    let song1 = document.querySelector('#song1');
    let song2 = document.querySelector('#song2');
    let song3 = document.querySelector('#song3');

    song1.innerHTML = "Humans";
    song2.innerHTML = "Mercury";
    song3.innerHTML = "Followers";
}
window.onload = addSongs();