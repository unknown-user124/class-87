var canvas= new fabric.Canvas ("canvas1");
 player_x=10;
 player_y=10;

block_width=30;
block_height=30;

var player_object="";
var block_object="";

function player_Update() {
    fabric.Image.fromURL("player.png", function(Img){

        player_object=Img;
        player_object.scaleToWidth(100);
        player_object.scaleToHeight(100);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });

}
function player_Update2(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_object);
    });

}
window.addEventListener("keydown",keydownn);

function keydownn(e) {
    keypressed=e.keyCode;
    if (e.shiftKey==true && keypressed=='80') {
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("span1").innerHTML=block_width;
        document.getElementById("span2").innerHTML=block_height;
    }

if (e.shiftKey==true && keypressed=='80') {
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("span1").innerHTML=block_width;
        document.getElementById("span2").innerHTML=block_height;
    }
    
if (keypressed == '38') {
    up();
    console.log("up");
        
    }

    if (keypressed == '40') {
        down();
        console.log("down");
            
        }

if (keypressed == '37') {
    left();
    console.log("left");
        
    }
    
if (keypressed == '39') {
    right();
    console.log("right");
        
    }
    
            
if (keypressed == '67') {
    player_Update2("cloud.jpg");
    console.log("cloud");
        
    }
    
             
if (keypressed == '71') {
    player_Update2("ground.png");
    console.log("ground");
        
    }
             
if (keypressed == '68') {
    player_Update2("dark_green.png");
    console.log("darkgreen");
        
    }
             
if (keypressed == '76') {
    player_Update2("light_green.png");
    console.log("light_green");
        
    }
             
if (keypressed == '82') {
    player_Update2("roof.jpg");
    console.log("roof");
        
    }
             
if (keypressed == '84') {
    player_Update2("trunk.jpg");
    console.log("trunk");
        
    }
             
if (keypressed == '85') {
    player_Update2("unique.png");
    console.log("unique");
        
    }
         
    if (keypressed == '87') {
        player_Update2("wall.jpg");
        console.log("wall");
            
        }
             
if (keypressed == '89') {
    player_Update2("yellow_wall.png");
    console.log("yellowwall");
        
    }
       
    
}
