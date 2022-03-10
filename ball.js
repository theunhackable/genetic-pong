
class Ball {
    
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.speedX = random(7, 10);
        this.speedY = 0;
        this.radius = 13;
        this.isReady = true;
    }
    reset() {
            this.x = width / 2;
            this.y = height / 2;
            this.speedX = random(7, 10);
            this.speedY = 0;

    }
    check() {
        if(this.isReady) {
            this.x += this.speedX;
            this.y += this.speedY;
        }
        
        // If ball reached bottom make y-direction speed positive
        if(this.y - this.radius < 0) {
            this.speedY = random(3,5);
        }
        // If ball reached bottom make y-direction speed negative
        if(this.y + this.radius > height) {
            this.speedY = -random(3,5);
        }
        // reached left
        if(this.x - this.radius < 0) {
            this.speedX = random(7,10);
        }
        // reached right
        if(this.x + this.radius > width) {
            
            max_gen_fit = 0;
            pop_count = max_pop;
            createNextGen()
            this.reset();
            generation ++;
        }
    }
    // returns the players collided with the ball 
    isCollided() {
        let temp = [];
        let player;
        for(let i = 0; i < players.length; i ++) {
            // check if ball bottom area is in between the player's top and bottom
            player = players[i];
            if(player.isAlive == yes && this.y + this.radius >= player.y - player.halfLength &&
                this.y - this.radius <= player.y + player.halfLength) {
                // check if the ball hits the player or not
                if(this.x + this.radius >= player.x - player.halfWidth &&
                    this.x + this.radius <= player.x) {
                    // console.log(`hit: ${i}`);
                    temp.push(i);
                    this.speedX = -random(7, 10);
                    if(this.y == player.y) {
                        this.speedY = 0;
                    }
                    else if(this.y > player.y) {
                        this.speedY = random(3, 5);
                    }
                    else {
                        this.speedY = -random(3, 5);
                    }
                }
            }
        }
        if(temp.length)
            pop_count = temp.length  
        
        return temp;
    }

    draw() {
        fill(255,0,0);
        circle(this.x, this.y, this.radius * 2);
    }
    update() {
        
        this.draw();
        this.check()
        
        
    }
   
}