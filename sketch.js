const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBgImage();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);
    textSize(35);
    text("Time :"+hour,width+100,50);
   


}

    async function getBgImage(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
        var dateTime = responseJSON.datetime;
        var hour = dateTime.slice(11,13);
        if (hour>=4 && hour<=6){
            bg = "sunrise1.png";
        }
        else if(hour>=6 && hour<=8)
        {
            bg = "sunrise2.png";
        }
        else if(hour>=23 && hour<=0)
        {
            bg = "sunset10.png";
        }else if(hour>=0 && hour<=3)
        {
            bg = "sunset11.png";
        }else 
        {
            bg = "sunset12.png";
        }
        backgroundImg = loadImage(bg);
        textColor("White")
        textSize(35);
    text("Time :"+hour,width+100,50);
    }


 