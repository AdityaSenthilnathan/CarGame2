class Form{
    constructor(){
        this.title = createElement('h2');
        this.inputbox = createInput("name");
       this.button = createButton("ENTER");
       this.greeting = createElement('h4');
    }
    display(){
       
        this.title.html("Car Racing Game!!");
        this.title.position(130,0);

        
        this.inputbox.position(130,160);

       
        this.button.position(250,200);

       
        
        this.button.mousePressed(()=>{
            this.inputbox.hide();
            this.button.hide();
            player.name = this.inputbox.value();
            playercount++;
            player.index = playercount;
            player.updateplayerinfo();
            player.updateplayercount(playercount);
         

            this.greeting.html("Welcome " + player.name);
            this.greeting.position(130,160);

        });



        


    }
    hide(){

        this.inputbox.hide();
       this.button.hide();
       this.greeting.hide();


        
    }

}