class Button {
    constructor(y, text, page){
        this.y = y
        this.page = page
        this.text = text
    }

    display(){
        noStroke()
        fill(light)
        rect(width/2, height/this.y, width/1.4, height/13, 10)
        
        fill(dark)
        textSize(height/15)
        text(this.text, width/2, height/this.y)
    }

    inside(x, y){
        if(x < (width/2 + width/2.8) &&
        x > (width/2 - width/2.8) &&
        y < (height/this.y + height/26) &&
        y > (height/this.y - height/26)){
            return true
        } else {
            return false
        }
    }
}