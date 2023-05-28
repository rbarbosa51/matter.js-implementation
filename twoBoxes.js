let engine = Matter.Engine.create();
let render = Matter.Render.create({
    element: document.body,
    engine: engine
});
let ground = Matter.Bodies.rectangle(400,600,810, 60,{isStatic: true});
let boxA = Matter.Bodies.rectangle(400,200,80,80);
let boxB = Matter.Bodies.rectangle(450,50,80,80);

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render: {visible: false}
    }
});
render.mouse = mouse;
Matter.World.add(engine.world, [boxA, boxB, ground, mouseConstraint]);
Matter.Engine.run(engine);
Matter.Render.run(render);