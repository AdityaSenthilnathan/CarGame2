class Game{
    constructor(){



    }
    getGameState() {
     var gamestateref = database.ref("gameState");
            gamestateref.on("value", function(data){
            gamestate = data.val();
    
     });
    
    }

    updategameState(state){
        var gamestateref = database.ref('/');
        gamestateref.update({
             gameState: state
        });


    }

    start(){

        if (gamestate === 0){
            player = new Player();
            player.getplayercount();
            form = new Form();
            form.display();

        }


    }

    play(){
        form.hide();
        text("Press the UP arrow to go forward", 250, 30);
        Player.getallplayersinfo();
        if (allplayers !==undefined){
            var yposition = 130;
            
            for(var plr in allplayers){
                if (plr === "player" + player.index){
                fill("red");

            }
            else{
                fill("blue");
            }
            text(allplayers[plr].name + ": " + allplayers[plr].distance, 30, yposition);
            yposition = ypostion + 20;


            }
        }
        if (keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 20;
            player.updateplayerinfo();


        }


    }

    }