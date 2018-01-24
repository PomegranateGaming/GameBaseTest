var config = {
  startup: function() {var x = 0; var y = 0;},
background: function() {ctx.fillStyle="white";canvasJS.rectangle(0,0,500,500);},
gameClick: function(e) {},
gameKey: function() {
if (code === 37) {
    x--;
    } else if (code === 38) {
      y--;
} else if (code === 39) {
          x++;     
               
           } else if (code === 40) {
    y++;
    }

},
gameTouch: function(e) {},
gamePlay: function() {
  ctx.fillStyle = "black";
canvasJS.rectangle(x,y,50,50);

}
};
