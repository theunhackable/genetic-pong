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

	frameRate(60);
	max_pop = 100;
	pop_count = max_pop;
	let can = createCanvas(canvasWidth, canvasHeight);
	can.parent("myCanvas");
	generation = 1;
	max_score = 0, max_fit = 0;
	max_gen_fit = 0;
	// let red, green, blue, black, white, yellow, violet, dark_green, maroon, dark_blue;	
	
	let alpha = 50;
	// red = color(255, 0, 0, alpha);
	// green = color(0, 255, 0, alpha);
	// blue = color(0, 0, 255, alpha);
	// white = color(255, 255, 255, alpha);
	// black = color(0, 0, 0, alpha);
	// yellow = color(	255, 255, 0, alpha);
	// violet= color(123, 50, 168, alpha);
	// dark_green = color(0, 51, 0, alpha);
	// maroon = color(153, 51, 51, alpha);
	dark_blue = color(0, 0, 102, alpha);
	
	ball = new Ball();
	for(let i = 0; i < max_pop; ++i) {
		players[i] = new Player('new');
	}
}	
function draw() {
	//
	let temp = game_speed;
	for(let i = 0; i < temp; i ++){ 
		background(255);
		fill(255);
		displayInfo();
		evolve();
		
		ball.update();
	}

}

