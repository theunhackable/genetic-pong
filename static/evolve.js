
function sortPlayers(players=[]){
    // sort players in reverse order
    players.sort(function(a, b){ return (b.fitness)- (a.fitness)})
}

function evolve(){
    // update every players
    sortPlayers(players);

    for(player of players) {
        player.update();
    }
    let temp = ball.isCollided();
    let t = temp.length;
    // if there are players who hit the ball remove remaining players
    if(t) {
        let j = t - 1;
        for(let i = players.length - 1; i > -1; --i ) {
            if(j < 0){
                if(players[i].isAlive == yes) {
                    players[i].isAlive = no;
                }
            }
            else if(i == temp[j]){
                --j;
                ++players[i].fitness;
                max_gen_fit = max(max_gen_fit, players[i].fitness);
            }
            else {
                if(players[i].isAlive == yes) {
                    players[i].isAlive = no;
                }
            }
        }
    }

}

function calculateFitness() {
    let maximum_fitness = 0
    // get maximum fitness
    for( player of players){
        player.score = player.fitness;
        if(maximum_fitness < player.fitness){
            maximum_fitness = player.fitness
        }
    }
    // normalise the player's fitness
    for( player of players){
        if(maximum_fitness != 0)
            player.fitness = player.fitness/maximum_fitness;
    }

}

function createMatingPool(){
    // reset mating pool
    mating_pool = []
    
    // calculate fitness
    calculateFitness();

    // for every player in the players array add the player to the mating pool according to the probability of the fitness
    // player with 100% probability has 100% more chance of being in the mating pool
    for(player of players){
        for(let i = 0; i < player.fitness * 100; ++i) {

            mating_pool.push(player)
        }
    }
    // add 400 new players for variation
    for(let i = 0; i < 400; ++i){
        mating_pool.push(new Player(`new_${i}`))
    }


}
function createNextGen() {
    createMatingPool();
    sortPlayers(players);
    // mutate first 1/4th part of players and save them at the next 1/4th part of players
    for( let i = max_pop/4; i < max_pop/2; ++i){
        let parent = players[parseInt(i - max_pop/4)]
        let child = new Player(`child_${parseInt(i - max_pop/4) + 1}`);
        let arr = parent.dna.mutate();
        child.dna.W = arr[0]
        child.dna.B = arr[1]
        players[i] = child
    }
    // remaining players are clones selected from the mating pool
    for(let i = max_pop/2; i < max_pop; ++i) {
        let parent = random(mating_pool)
        if(Math.random() > 0.5){
            let child = new Player(`pool_child_${parseInt(i - max_pop/2) + 1}`);
            let arr = parent.dna.mutate();
            child.dna.W = arr[0]
            child.dna.B = arr[1]
            players[i] = child
        }
        else{
            players[i] = new Player(`pool_new_${i}`);
        } 
    }
    // reset fitness to 0 and is alive as yes.
    for(player of players){
        player.isAlive = yes
        player.fitness = player.score;
    }


}