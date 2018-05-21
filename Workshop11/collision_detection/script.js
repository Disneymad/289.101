/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

//declaring puck initial location
var puck_x = 210;
var puck_y = 210;

//optimisation
var puck = document.getElementById('puck');
var speed = 50
var gap = document.getElementById('gap');

//adding the co-ordinates to puck
puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';

//function to log co-ordinates
function LogCoordinates(){
    console.log('x=' + puck_x + 'y' + puck_y);
}

function CheckCollision(){
    //collision detection code goes here
    if(puck_x >= 250 && puck_x < 350){
        console.log('collision!');
        gap.style.backgroundColor = 'red';
    }
    else{
        gap.style.backgroundColor = 'white';
    }
}

function teleport(){
    if(puck_x >= 600){
        puck.style.left = -10 + 'px';
    }
}



//move left
document.getElementById('left').addEventListener('click', function () {
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    LogCoordinates();
    CheckCollision();
});

//move right
document.getElementById('right').addEventListener('click', function () {
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    LogCoordinates();
    CheckCollision();
    teleport();
});

//move top
document.getElementById('up').addEventListener('click', function () {
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    LogCoordinates();
    CheckCollision();
});

//move bottom
document.getElementById('down').addEventListener('click', function () {
    puck_y += speed;
    puck.style.bottom = puck_y + 'px';
    LogCoordinates();
    CheckCollision();
});
