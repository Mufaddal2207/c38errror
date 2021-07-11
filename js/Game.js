class Game {

    constructor() {







    }

    getState() {
        database.ref("gameState").on("value", function (data) {
            gameState = data.val()
            console.log(gameState)
        })





    }


    start() {
        console.log(gameState)
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)
        if (gameState === 0) {
            player = new Player();
            player.getCount();


            form = new Form()
            form.display();



        }




    }
    updateState(state) {

        database.ref('/').update({ gameState: state })



    }


    play() {

        console.log("gamebegins")
       drawSprites()
if(keyIsDown(UP_ARROW)&&player.index!==null){

player.distance+=50

player.updateName()

}










    }












}






















