var gamestate = 0, playercount = 0;
var form, player, game;
var database;
var allplayers;
var distance = 0;
function setup(){
    var canvas = createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();


}
function draw(){
    if (playercount === 2){
        game.updategameState(1);

    }
    if (gamestate === 1 ){
        clear();
        game.play();
    }


}



