var canvasWidth = 650
var canvasHeight = 200

var spriteWidth = 864
var spriteHeight = 280

var rows = 2
var columns = 8

var trackLeft = 1
var trackRight = 0 

var width = spriteWidth/columns
var height = spriteHeight/rows

var x = 0
var y = 0

var curFrame = 0
var frameCount = 8

var srcX = 0
var srcY = 0

var left = false
var right = true

var speed = 12

var canvas = document.getElementById("canvas")

canvas.width = canvasWidth
canvas.height = canvasHeight

var ctx = canvas.getContext("2d")

var character = new Image()
character.src = "character.png"

function updateFrame(){
    curFrame = ++curFrame % frameCount
    srcX = curFrame * width
    ctx.clearRect(x,y,width,height)

    if(left && x>0){
        srcY = trackLeft * height
        x -= speed
    }
    if(right && x<(canvasWidth-width)){
        srcY = trackRight * height
        x += speed
    }
}

function draw(){
    updateFrame()
    ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height)
}
setInterval(draw,100)

function moveLeft(){
    left = true
    right = false
}

function moveRight(){
    left = false
    right = true
}

