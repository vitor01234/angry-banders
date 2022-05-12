class Pig extends Doramaronba {
  constructor(x, y) {
    super(x, y, 50, 50)
    this.image = loadImage('sprites/enemy.png')
    this.vizility = 255
  }
  display() {
    console.log(this.body.speed)

    if (this.body.speed < 3) {
      super.display()
    } else {
      World.remove(world, this.body)
      this.vizility -= 5
      tint(255, this.vizility)
      image(this.image, this.body.position.x, this.body.position.y, 50, 50)
    }
  }
}
