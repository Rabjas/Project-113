function setup(){
    canvas=createCanvas(650,500);
    canvas.position(180,200);
    video=createCapture(VIDEO);
    video.hide();
    
}
function preload(){

}
function draw(){
    image(video,150,100,350,300);
    fill("red");
    stroke("red");
    circle(50,50,80);
    circle(600,50,80);
    circle(50,450,80);
    circle(600,450,80);
    fill("green");
    stroke("green");
    rect(90,35,475,30);
    rect(90,435,475,30);
    rect(35,80,30,335);
    rect(590,80,30,335);
    
    
    
    
    
    
}
function take_snapshot(){
    save("Square_Image.png")  
}