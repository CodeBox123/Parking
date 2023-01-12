const canvas = document.getElementsByClassName('canvas');
console.log(canvas);

const ctx = canvas[0].getContext('2d');



var greencar_width = 75;
var greencar_height = 100;

var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";

var greencar_x = 5;
var greencar_y = 225;

function add() {
	console.log('hey');
	
object1 = new Image();
object1.src = background_image;
object1.onload = uploadBackground;


object2 = new Image();
object2.src = greencar_image;
object2.onload = uploadgreencar;
}

function uploadBackground() {
	ctx.drawImage(object1, 0, 0, 900, 600);
}

function uploadgreencar() {

console.log(greencar_x);
console.log(greencar_y);

ctx.drawImage(object2, greencar_x, greencar_y, greencar_width, greencar_height);
	
}

function up()
{
	console.log("up");

if(greencar_y <= 600){
    console.log("up 2");
	greencar_y = greencar_y - 10;
	uploadBackground();
	uploadgreencar();
}
}

function down(){
	console.log("down");
	if(greencar_y >= 0){
		// console.log('down 2')
		greencar_y = greencar_y + 10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	// console.log('left');

	if(greencar_x >= 0){
		// console.log('left 2');
		greencar_x = greencar_x - 10;
		uploadBackground();
		uploadgreencar();
		}
}

function right()
{
	// console.log('right');
	console.log(greencar_x);

	if(greencar_x <= 800){
		console.log('right 2');
		greencar_x = greencar_x + 10;
		uploadBackground();
		uploadgreencar();
		}
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	//console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();

		}
	
		if(keyPressed == '40')
		{
			down();

		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

