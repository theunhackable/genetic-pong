class Player{
    constructor(name, color=dark_blue){
        
        this.name = name;
        this.color = color;

        this.length = 150;
        this.width = 20;
        
        this.halfLength = 75;
        this.halfWidth = 15;
        
        this.x = width - 100;
        this.y = height/2;
        
        this.speedY = 10;
        
        this.up = this.down = false;

        this.score = 0;
        this.fitness = 0;
        this.isAlive = yes;
        
        this.dna = new NN(2, [4, 3, 2, 1])
    }
    moveUp() {
        // if(this.up)
        if (this.y - this.halfLength > 0)
                this.y -= this.speedY;

    }
    moveDown() {
        // if(this.down){
            
            if (this.y + this.halfLength <= height )
            this.y += this.speedY;
        // }
    }
    mutate(){
        // TODO: complete this method;
        // use deep copy;
    }
    decide() {
        // normalise inputs
        let X = [
                    [ball.x ],
                    [ball.y ],
                    [this.y],
                    [dist(ball.x, ball.y, this.x, this.y)] 
                ];
        let dec = this.dna.predict(X);
        if(dec[0][0] > 0){
            this.moveUp()
        }
        else{
            this.moveDown()
        }
    }

    draw() {
        if(this.isAlive == yes) {
            this.fitness = this.score; 

            this.moveDown();
            this.moveUp();

            this.decide();
            strokeWeight(3);
            fill(this.color);
            rectMode(CENTER);
            // this.y = mouseY;
            rect(this.x, this.y, this.width, this.length);    
            
        }
    }

    update() {
        this.draw();         
    }

}

function sortPlayers(players=[]){
    players.sort(function(a, b){ return b.fitness - a.fitness})
}



