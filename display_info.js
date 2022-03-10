function displayInfo(){
    if(max_gen_fit > max_fit)
        max_fit = max_gen_fit;
    
    document.getElementById("generation").innerHTML = "Generation: " + generation;
    document.getElementById("max_fitness").innerHTML = "Maximum Fitness: " + max_fit;
    document.getElementById("pop_count").innerHTML = "Remaining Population : " + pop_count;
    document.getElementById("this_gen_max_fit").innerHTML = "this gen max fit: " + max_gen_fit;
    
    let slider = document.getElementById("speed");
    var output = document.getElementById("demo");
    
    output.innerHTML = slider.value
    game_speed = slider.value;
    
    let table = `
    <table>
        <th>
            Player
        </th>
        <th>
            Score
        </th>
        <th>
            Fitness
        </th>

        <th>
            Alive
        </th>
    `
    let content = ``
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < players.length; ++j){
            if(players[i].isAlive) {
                let cls = 'noClass';
                if(players[i].isAlive == no){
                    cls = 'disabled';
                    content += `\n<tr class=${cls}>
                        <td>${players[i].name}</td>
                        <td>${players[i].score}</td>
                        <td>${players[i].fitness}</td>
                        <td>${players[i].isAlive}</td>
                    </tr>\n`
                }
                else {
                    content += `\n<tr>
                        <td>${players[i].name}</td>
                        <td>${players[i].score}</td>
                        <td>${players[i].fitness}</td>
                        <td>${players[i].isAlive}</td>
                    </tr>\n`

                }
                break;
            }
        }
    }
    let end_table = '</table>'; 

    document.getElementById("players-table").innerHTML= table + content + end_table;
}
