var canvas = new fabric.Canvas ('myCanvas');

player_x = 10;
player_y = 10;

superhero_image_width = 30;
superhero_image_height = 30;

var player_object= "";
var superhero_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	superhero_object = Img;

	superhero_object.scaleToWidth(superhero_image_width);
	superhero_object.scaleToHeight(superhero_image_height);
	superhero_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(superhero_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	superhero_image_width = superhero_image_width + 10;
	superhero_image_height = superhero_image_height + 10;
	document.getElementById("current_width").innerHTML = superhero_image_width;
	document.getElementById("current_height").innerHTML = superhero_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	superhero_image_width = superhero_image_width - 10;
	superhero_image_height = superhero_image_height - 10;
	document.getElementById("current_width").innerHTML = superhero_image_width;
	document.getElementById("current_height").innerHTML = superhero_image_height;
}
if(keyPressed == '70')
{
	new_image('ironman_face.png');
	console.log("f");
}
if(keyPressed == '66')
{
	new_image('spiderman_body.png');
	console.log("b");
}
if(keyPressed == '76')
{
	new_image('hulk_legs.png');
	console.log("l");
}
if(keyPressed == '82')
{
	new_image('thor_right_hand.png');
	console.log("r");
}
if(keyPressed == '72')
{
	new_image('captain_america_left_hand.png');
	console.log("h");
}
if(keyPressed == '38')
{
	up();
	console.log("up");
}

if(keyPressed == '40')
{
	down();
	console.log("down");
}

if(keyPressed == '39')
{
	right();
	console.log("right");
}

if(keyPressed == '37')
{
	left();
	console.log("left");
}

}


function up()
{
	if(player_y >=0)
	{
		player_y = player_y - superhero_image_height;
		console.log("superhero image height = " + superhero_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + superhero_image_height;
		console.log("superhero image height = " + superhero_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - superhero_image_width;
		console.log("superhero image width = " + superhero_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + superhero_image_width;
		console.log("superhero image width = " + superhero_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}



