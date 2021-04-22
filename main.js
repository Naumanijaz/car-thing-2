var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car1_image= "https://postimg.cc/9rqYz9HM"
car2_width= 120;
car2_height=70;
car2_image="https://postimg.cc/9rqYz9HM"
randomnumber=Math.floor(Math.random() * 4); 
var background_img="https://postimg.cc/p9D2dqqZ";
function add() {background_imgtag=new Image();
background_imgtag.onload=upload_background;
background_imgtag.src=background_img;
car1_imgtag=new Image();
car1_imgtag.onload=upload_car1;
car1_imgtag.src=car1_image;};
function upload_background() {ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)}
function upload_car1() {ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) { keyPressed = e.keyCode; console.log(keyPressed); 
if(keyPressed == '38') { car1_up(); console.log("up arrow key"); } 
if(keyPressed == '40') { car1_down(); console.log("down arrow key"); } 
if(keyPressed == '37') { car1_left(); console.log("left arrow key"); }
if(keyPressed == '39') { car1_right(); console.log("right arrow key"); } }
function my_keydown(e)
{if(keyPressed == '87') { car2_up(); console.log("w arrow key"); } 
if(keyPressed == '83') { car2_down(); console.log("s arrow key"); } 
if(keyPressed == '65') { car2_left(); console.log("a arrow key"); }
if(keyPressed == '68') { car2_right(); console.log("d arrow key"); } }
function car1_up() {car1_y=car1_y-10;
upload_background();
upload_car1()};
function car1_up()
{
    if(car1_y>=0)
    {
        car1_y=car1_y-10;
        console.log("when up arrow is pressed, x="+ car1_x +"| y =" +car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
 }
 function car1_down()
 {
     if(car1_y <=500)
     {    
      car1_y =car1_y+ 10;
      console.log("when down arrow is pressed, x=" + car1_x +"| y ="+car_y);
      upload_background();
      upload_car1();
      upload_car2();
    }
 }
 
 function car1_left()
 {if(car1_>=0){
     car1_x=car1_x-10;
     console.log("When left arrow is pressed, x=" + car1-x +"| y = "+car1_y);
     upload_background();
     upload_car1();
     upload_car2
 }}