const Engine=Matter.Engine;
 const World=Matter.World;
  const Bodies=Matter.Bodies;
   var myEngine,myWorld;
    var box1,box2;
    var ground1;

     function setup(){ 
        createCanvas(400,400); 
         myEngine=Engine.create();
        myWorld=myEngine.world; 
          box1=new Box(200,200,100,50); 
          box2=new Box(200,300,50,100);
          ground1 = new ground(200,370,200,30);
           console.log(box1); }
            function draw(){ background("black"); 
            Engine.update(myEngine);
             box1.display(); 
             box2.display();
             ground1.display();
             }