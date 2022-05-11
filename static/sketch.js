let canvasWidth = 1400, canvasHeight = 800;
let ball;
let players = [];
let max_pop;
let generation;
let max_score, max_fit, pop_count, max_gen_fit;
let dark_blue;
let mating_pool;
let yes = '💚', no = '💔 ';
let game_speed = 1
function setup() {
	// create canvas to draw
	let can = createCanvas(canvasWidth, canvasHeight);
	can.parent("myCanvas");

	// initialize all variables
	max_pop = 100;
	pop_count = max_pop;
	
	generation = 1;
	max_score = 0, max_fit = 0;
	max_gen_fit = 0;
	
	dark_blue = color(0, 0, 102, 50);
	
	ball = new Ball();
	for(let i = 0; i < max_pop; ++i) {
		players[i] = new Player(`new_${i + 1}`);
	}
}	
function draw() {
	//
	let temp = game_speed;
	// loop to control speed of the game
	for(let i = 0; i < temp; i ++){ 
		background(255);
		// fill(255);
		displayInfo();
		evolve();
		players[0].color = color(255, 0, 0, 90);
		ball.update();
	}

}

