const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world
var chumqui
var pasoro, puerco1, puerco2
var plataforma
var estilenguite

function setup() {
  var canvas = createCanvas(1200, 600)
  engine = Engine.create()
  world = engine.world
  pasoro = new Bird(200, 200)
  puerco1 = new Pig(600, 300)
  puerco2 = new Pig(600, 200)
  chumqui = new Ground(600, 580, 1200, 40)
  plataforma = new Ground(150, 300, 300, 200)
  estilenguite = new Estilingue(pasoro.body, {x:200, y:50})
}

function draw() {
  background('ligthblue')
  Engine.update(engine)
  pasoro.display()
  puerco1.display()
  puerco2.display()
  chumqui.display()
  plataforma.display()
  estilenguite.display()
}
