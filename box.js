class Box{
constructor(x,y,width,height){
    var options={
   isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
}
display(){
    var pos=this.body.position
push();
rectMode(CENTER)
translate(this.body.position.x,this.body.position.y)
fill("red")
rect(this.body.position.x,this.body.position.y,this.width,this.height)
pop();
}
}