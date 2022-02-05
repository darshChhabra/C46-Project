var mario
var marioRunning
var bg

function preload(){
    marioImg = loadImage("assets/mario.jpg")
    marioRunningImg = loadAnimation("assets/marioRunning_1.png", "assets/marioRunning_2.png")
    bgImg = loadImage("assets/bg.png")
}

function setup(){
    createCanvas(500, 300)

    mario = createSprite(250, 230, 20, 20)
    mario.addImage(marioImg)
    mario.scale = 0.15

    bg = createSprite(250, 150, 500, 600)
    bg.addImage(bgImg)
    bg.scale = 2
}

function draw(){
    background(0)

    bg.velocityX = -19

    drawSprites()
}