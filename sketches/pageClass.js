// base page class
class Page {
    constructor(){
        this.buttons = [new Button(1.1, 'QUIT', 0)]
    }

    display(){
        for(let i of this.buttons){
            i.display()
        }

        noStroke()
        fill(light)
        textSize(height/10)
    }

    buttonCheck(x, y){
        for (let i of this.buttons){
            if(i.inside(x, y)){
                return i
            }
        }
    }
}