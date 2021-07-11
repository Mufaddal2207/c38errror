class Form{
constructor(){
    
this.input=createInput("NAME")

 this.button = createButton("LET'S GO")
  this.greetings = createElement("h1")

}

display(){
    console.log("form")
var title=createElement("h2","CAR RACING GAME")


title.position(displayWidth/2-40,150)
this.input.position(displayWidth/2-40,200)
this.button.position(displayWidth/2-40,200)

this.button.mousePressed(()=>{
   this.input.hide();
    this.button.hide();

   playerCount++
   player.index=playerCount
   player.updateCount(playerCount)
   player.name =this.input.value()
    player.updateName()
 this.greetings.html("HEY "+player.name)
this.greetings.position(displayWidth/2-40,300)















































}) 
    

}















}