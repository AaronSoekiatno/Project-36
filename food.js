class food{
    constructor(){
        this.foodStock = 0;
        this.lastFed = 0;
        this.image = loadImage("images/Milk.png");
    }

    getFoodStock(){
        return this.foodStock;
    }
    
    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock = this.foodStock-1;
        }
    }

    getFedTime(lastFed){
        this.lastFed=lastFed;
      }

    bedroom(){
        background(bed,550,500);
    }

    garden(){
        background(garden,550,500);
    }

    washroom(){
        background(wash,550,500);
    }

    display(){
        var x = 100, y = 300;
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(this.foodStock!=0){
            for(var i = 0;i<this.foodStock;i++){
                if(i%10===0){
                    x=100;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }

    }
}
