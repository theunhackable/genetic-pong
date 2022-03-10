function evolve(){
    for(player of players) {
        player.update();
    }
    let temp = ball.isCollided();
    let t = temp.length;
    if(t) {
        // update population count
        let j = t - 1;
        for(let i = players.length - 1; i > -1; --i ) {
            if(j < 0){
                if(players[i].isAlive == yes) {
                    players[i].isAlive = no;
                }
            }
            else if(i == temp[j]){
                --j;
                ++players[i].score;
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
    sortPlayers(players);

}

function calculateFitness() {
    let maxi = 0
    for( player of players){
        if(maxi < player.fitness){
            maxi = player.fitness
        }
    }
    for( player of players){
        if(maxi != 0)
            player.fitness = player.fitness/maxi;
    }

}

function createMatingPool(){
    mating_pool = []
    calculateFitness();
    for(player of players){
        for(let i = 0; i < player.fitness * 30; ++i) {
            mating_pool.push(player)
        }
    }
    for(let i = 0; i < 100; ++i){
        mating_pool.push(new Player('new'))
    }


}
function createNextGen() {
    createMatingPool();
    sortPlayers(players);
    for( let i = max_pop/4; i < max_pop/2; ++i){
        let parent = players[parseInt(i - max_pop/4)]
        let child = new Player("child");
        let arr = parent.dna.mutate();
        child.dna.W = arr[0]
        child.dna.B = arr[1]
        players[i] = child
    }
    for(let i = max_pop/2; i < max_pop; ++i) {
        let r = random(mating_pool)
        let new_player = new Player("clone");
        let arr = r.dna.clone();
        new_player.dna.W = arr[0];
        new_player.dna.B = arr[1];

        players[i] = new_player;
    }
    for(player of players){
        player.isAlive = yes
        player.fitness = 0
    }


}