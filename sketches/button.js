class Button {
    constructor(x, y, w, text, page){
        this.y = y
        this.x = x
        this.w = w
        this.page = page
        this.text = text
    }

    display(){
        noStroke()
        fill(light)
        rect(width/this.x, height/this.y, width/this.w, height/13, 10)
        
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