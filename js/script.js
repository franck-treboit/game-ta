
var player = document.getElementById('audioPlayer');
function goSound() {
    player.play();
}
window.addEventListener('click', function (event) {
    goSound();
});
