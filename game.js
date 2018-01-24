function clear() {
config.background();
}
// set variables
var code;
var key = false;
var x = 0;
var y = 0;
function char() {
config.gamePlay();
                   if(key){config.gameKey();}
}
var touch = 0;
        window.addEventListener('keydown', function (e) {
                code = e.keyCode;
                key = true;
 
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

window.addEventListener('keyup', function () {
                
                key = false;
 
        });

setInterval(function(){clear();char();},10);

