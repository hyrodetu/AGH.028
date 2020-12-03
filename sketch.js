var player
var gamestate



function preload(){


}

function setup(){
    createCanvas(800, 700);

    player= new Player(100,100,10,10)

}

function draw(){
    background("white")
    camera.x=player.x
    camera.y=player.y

    player.movement()
    drawSprites();
    
}