class Estilingue {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10
    }
    this.sling = Constraint.create(options)
    this.sling1 = loadImage('sprites/sling1.png')
    this.sling2 = loadImage('sprites/sling2.png')
    this.pointB = pointB;
    this.sling3 = loadImage('sprites/sling3.png')
    World.add(world, this.sling)
  }
  display() {
    image(this.sling1, 200, 20)
    image(this.sling2, 175, 20)
    image(this.sling3, 200, 20)
    var pointA = this.sling.bodyA.position
    var pointB = this.pointB
    push()
    strokeWeight(5)
    line(pointA.x, pointA.y, pointB.x, pointB.y)
    pop()
  }
}
