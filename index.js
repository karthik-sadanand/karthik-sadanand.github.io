var screen = document.querySelector("#containerOne");
var image = document.querySelector("#dogImage");

var START_X = Math.round((screen.offsetWidth - image.offsetWidth) / 2);
var START_Y = Math.round((screen.offsetHeight - image.offsetHeight) / 2);

var mc = new Hammer.Manager(image);

var pinch = new Hammer.Pinch(); 

mc.add(pinch);

mc.on("pinch", function() {
    console.log("detected");
});