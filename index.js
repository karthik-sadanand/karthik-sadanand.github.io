var screen = document.querySelector("#containerOne");
var box = document.querySelector("#myElement");

var START_X = Math.round((screen.offsetWidth - box.offsetWidth) / 2);
var START_Y = Math.round((screen.offsetHeight - box.offsetHeight) / 2);

var mc = new Hammer.Manager(box);

var Press = new Hammer.Press();
var Tap = new Hammer.Tap(); 
var Pinch = new Hammer.Pinch();

mc.add([Tap,Press,Pinch]);

mc.on("panleft panright tap press pinch", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});
