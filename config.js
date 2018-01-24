var config = {
  startup: function() {var x = 0; var y = 0;},
background: function() {ctx.fillStyle="white";canvasJS.rectangle(0,0,500,500);},
gameClick: function(e) {},
gameKey: function(e) {
if (e.keyCode === 37) {
    x--;
    } else if (e.keyCode === 38) {
      y--;
} else if (e.keyCode === 39) {
          x++;     
               
           } else if (e.keyCode === 40) {
    y++;
    }

},
gameTouch: function(e) {},
gamePlay: function() {
  ctx.fillStyle = "black";
canvasJS.rectangle(x,y,50,50);

}
};
