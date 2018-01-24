function clear() {
config.background();
}
// set variables
var x = 0;
var y = 0;
function char() {
config.gamePlay();
}
var touch = 0;
        window.addEventListener('keydown', function (e) {
            config.gameKey(e);
        });
window.addEventListener('touchstart', function () {
             if (y===400) {touch = 1;
   }

        });
window.addEventListener('touchend', function (e) {
         if (touch===1) {
           config.gameTouch(e);
           touch = 0;
             }

        });
window.addEventListener('click', function (e) {
            config.gameClick(e);
});



setInterval(function(){clear();char();},10);

