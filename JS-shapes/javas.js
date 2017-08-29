function shapee(a){

	document.getElementById('square-val').style.display="none";
	document.getElementById('rectangle-val').style.display="none";
	document.getElementById('circle-val').style.display="none";
	document.getElementById('triangle-val').style.display="none";
	document.getElementById('hexagon-val').style.display="none";
	document.getElementById(a+'-val').style.display="block";
}

function output_square(){
	var side = parseInt(document.getElementById('sq-val').value);
	var area=side*side;
	draw_square();
	document.getElementById("sq-area").value=area;
	document.getElementById("sq-peri").value=4*side;
}

function output_rectangle(){
	var len= parseInt(document.getElementById('rec-len').value);
	var bre= parseInt(document.getElementById('rec-bre').value);
	draw_rect();
	document.getElementById("rec-area").value=len*bre;
	document.getElementById("rec-peri").value=2*(len+bre);
}

function output_circle(){
	var rad=parseInt(document.getElementById('circ-r').value);
	draw_circle();
	document.getElementById("circ-area").value=3.14*rad*rad;
	document.getElementById("circ-peri").value=3.14*rad*2;
}

function output_triangle(){
	var s1=parseInt(document.getElementById('tri-s1').value);
	var s2=parseInt(document.getElementById('tri-s2').value);
	var s3=parseInt(document.getElementById('tri-s3').value);
	var s=(s1+s2+s3)/2;
	var are=Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
	draw_triangle()
	document.getElementById("tri-area").value=are;
	document.getElementById("tri-peri").value=s1+s2+s3;
}

function output_hexagon(){
	var side = parseInt(document.getElementById('hex-s').value);
	
	draw_hexagon()

	document.getElementById("hex-area").value=2.55*side*side;
	document.getElementById("hex-peri").value=6*side;
}

function draw_rect(){

	var len= parseInt(document.getElementById('rec-len').value);
	var bre= parseInt(document.getElementById('rec-bre').value);
	var canvas = document.getElementById("shaping");
	var ctx=canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(20,20,20+len,20+bre);
}

function draw_square(){

	var side = parseInt(document.getElementById('sq-val').value);
	var canvas = document.getElementById("shaping");
	
	var ctx=canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(20,20,20+side,20+side);
}
function draw_circle() {

	var rad=parseInt(document.getElementById('circ-r').value);
	var canvas = document.getElementById("shaping");
	var ctx=canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(100,75,rad,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#333333";
	ctx.fill()

}
function draw_hexagon(){
	var size = parseInt(document.getElementById('hex-s').value);
	var canvas = document.getElementById("shaping");
	var ctx=canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	var x=100;
	var y=100;
	var side=0;

	ctx.beginPath();
	ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
	for (side; side < 7; side++) {
  		ctx.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
	}

	ctx.fillStyle = "#333333";
	ctx.fill()

}

function draw_triangle(){
	var canvas = document.getElementById("shaping");
	var ctx=canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.fill();
}