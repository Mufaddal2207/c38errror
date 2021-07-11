var player,game,form
var car1,car2,car3,car4,cars
var gameState=0 , playerCount=0
function setup(){
    createCanvas(displayWidth-50,displayHeight);
    
    database=firebase.database()
    game=new Game()
game.getState()
game.start()


}
function draw(){
console.log(playerCount)
console.log(gameState)
if(playerCount===4){
    console.log(gameState)
game.updateState(1)





}

if(gameState===1){
    console.log(gameState)
game.play()


}


}






