var mouseSpeed = 0;
var sped = document.getElementById('speed');
var box = document.getElementById('game1');
var cm = false
var top = 0;

function lerp(start, end, amount) {
    return (1 - amount) * start + amount * end;
  }
//linear interpolation function


var totalX = 0;
var totalY = 0;
//one dimensional speed
var moveX = 0;
var moveY = 0;
//moved distance
var prev = 0;
//previous speed
var result = 0;
//total speed

box.addEventListener("mousemove", function(ev){
    totalX += Math.abs(ev.movementX);
    totalY += Math.abs(ev.movementY);
    moveX += ev.movementX;
    moveY += ev.movementY;
    mouseSpeed = Math.sqrt(Math.pow(totalX, 2) + Math.pow(totalY, 2))
    result = lerp(prev,mouseSpeed,0.2);
    prev = result
}, false);

checkIfCM()

setInterval(function(){
    moveX = moveY = totalX = totalY = 0;
}, 100);

function updat(){
    mouseSpeed = Math.sqrt(Math.pow(totalX, 2) + Math.pow(totalY, 2))
    result = lerp(prev,mouseSpeed,0.9);
    prev = result
    sped.innerHTML = `${Math.round(result*10)}px/s`
}
//updating html func in px

function updat2(){
    mouseSpeed = Math.sqrt(Math.pow(totalX, 2) + Math.pow(totalY, 2))
    result = lerp(prev,mouseSpeed,0.7);
    prev = result
    sped.innerHTML = `${Math.round(result*10*0.02645833*10)/10}cm/s`
}

function chang(){
    cm = !cm
}

var intervalId;
function checkIfCM(){
    if(cm){
        clearInterval(intervalId);
        intervalId = setInterval(updat2, 100);
    }else{
        clearInterval(intervalId);
        intervalId = setInterval(updat, 100);
    }
}

setInterval(checkIfCM,500)