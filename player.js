class Player{
constructor(){


    this.kills=0;
    this.name=null;
    this.block=createSprite(100,100,20,20)
    }




    movement(){
        background("white");
        if(keyDown("A")){
            this.updateposition (-5,0);
        }
        else if(keyDown("D")){
            this.updateposition (5,0);
        }
        else if(keyDown("w")){
            this.updateposition (0,-5);
        }
        else if(keyDown("S")){
            this.updateposition (0,5);
        }
        drawSprites();
        angleMode(DEGREES)
        console.log(this.block)
        
    }
   
  updateposition(x,y){
    this.block.x=this.block.x+x
    this.block.y=this.block.y+y
    

  }

}
