class Prox {
    constructor(x, y, d, f){
        this.x = x
        this.y = y
        this.d = d
        this.f = f
    }

    inside(x, y){
        if (dist(this.x * width, this.y * height, x * width, y * width) < this.d * width/2) {
            return true
        }
        noFill()
        stroke(0)
        strokeWeight(.001 *width)
        circle(this.x * width, this.y * height, this.d * width)
    }
}

class Int {
    constructor(x, y, visible){
        this.x = x
        this.y = y
        this.visible = visible
        this.triggered = false
    }

    display(){
        fill(light)
            noStroke()
            circle(this.x * width, this.y * height, (5*sin(frameCount * 5) + (.01 * width)))
            if(this.inside()){
                fill(0, 0, 0, 150)
                rect(this.x * width, this.y * height + .05 * height, .03 * width, .03 * width, .005 * width)
                fill(light)
                textSize(.015 * width)
                text('[E]', this.x * width, this.y * height + .05 * height)
            }
    }

    inside(){
        if(dist(this.x * width, this.y * height, player.x * width, player.y * width) < .05 * width && this.visible){
                return true
            }
    }
}

class Nar {
    constructor(nar){
        this.nar = nar
        this.next = 0
        this.done = false
    }
    
    display(){
        if (!this.done){
            fill(dark, 150)
            noStroke()
            rect(width/2, height/1.2, .98 * width, .3 * height, .02 * width)

            fill(light)
            textSize(.02 * width)
            text(this.nar[this.next], width/2, height/1.2)

            //continue button
            fill(light)
            rect(.93 * width, .94 * height, .1 * width, .05 * height, .02 * width)
            fill(dark)
            text('Continue', .93 * width, .94 * height)
        }
    }

    isDone(){
        if (this.next >= this.nar.length){
                this.done = true
            }
        //console.log(this.next, this.nar.length, this.done)
    }

    inside(x, y){
        //console.log(this.next < this.nar.length, this.done)
        if (!this.done){
            if (x > ((.93 * width) - (.05 * width)) &&
            (x < ((.93 * width) + (.05 * width))) &&
            (y > ((.94 * height) - (.025 * height))) &&
            (y < ((.94 * height) + (.025 * height)))){
                return true
            }  
        } else{
            return false
        }
    }

    continue(){
            this.next ++  
    }
}


class Dia {
    constructor(dia){
        this.dia = dia
        this.next = 0
        this.done = false
    }
    
    display(){
        if (!this.done){
            fill(dark, 150)
            noStroke()
            rect(width/2, height/1.2, .98 * width, .3 * height, .02 * width)

            //text
            fill(light)
            textSize(.025 * width)
            textAlign(LEFT)
            text(this.dia[this.next][0], .03 * width, height/1.35) //speaker
            textSize(.02 * width)
            textAlign(CENTER)
            text(this.dia[this.next][1], width/2, height/1.2) // dialogue

            //continue button
            fill(light)
            rect(.93 * width, .94 * height, .1 * width, .05 * height, .02 * width)
            fill(dark)
            text('Continue', .93 * width, .94 * height)
        }
    }

    isDone(){
        if (this.next >= this.dia.length){
                this.done = true
            }
        //console.log(this.next, this.dia.length, this.done)
    }

    inside(x, y){
        if (!this.done){
            if (x > ((.93 * width) - (.05 * width)) &&
            (x < ((.93 * width) + (.05 * width))) &&
            (y > ((.94 * height) - (.025 * height))) &&
            (y < ((.94 * height) + (.025 * height)))){
                return true
            }  
        } 
    }

    continue(){
            this.next ++
            
    }
}

class Choice {
    constructor(nar, one, two){
        this.nar = nar
        this.done = false
        this.one = one
        this.two = two
        this.chosen = null
    }
    
    display(){
        if (!this.done){
            fill(dark, 150)
            noStroke()
            rect(width/2, height/1.2, .98 * width, .3 * height, .02 * width)

            fill(light)
            textSize(.02 * width)
            text(this.nar, width/2, height/1.3)

            //choice buttons
            fill(light)
            rect(.5 * width, .94 * height, .7 * width, .05 * height, .02 * width)
            fill(dark)
            text(this.one, .5 * width, .94 * height)
            fill(light)
            rect(.5 * width, .87 * height, .7 * width, .05 * height, .02 * width)
            fill(dark)
            text(this.two, .5 * width, .87 * height)
        }
    }

    isDone(){
    }

    inside(x, y){
        if (!this.done){
            if (x > ((.5 * width) - (.35 * width)) &&
            (x < ((.5 * width) + (.35 * width))) &&
            (y > ((.94 * height) - (.025 * height))) &&
            (y < ((.94 * height) + (.025 * height)))){
                return true
            }  else if(x > ((.5 * width) - (.35 * width)) &&
            (x < ((.5 * width) + (.35 * width))) &&
            (y > ((.87 * height) - (.025 * height))) &&
            (y < ((.87 * height) + (.025 * height)))){
                return true
            } 
        } else{
            return false
        }
    }

    continue(){
        if (mouseX > ((.5 * width) - (.35 * width)) &&
            (mouseX < ((.5 * width) + (.35 * width))) &&
            (mouseY > ((.94 * height) - (.025 * height))) &&
            (mouseY < ((.94 * height) + (.025 * height)))){
                this.chosen = '2'
            }  else if(mouseX > ((.5 * width) - (.35 * width)) &&
            (mouseX < ((.5 * width) + (.35 * width))) &&
            (mouseY > ((.87 * height) - (.025 * height))) &&
            (mouseY < ((.87 * height) + (.025 * height)))){
                this.chosen = '1'
            } 

    }
}

class Null {
    constructor(){
        this.nar = null
        this.next = 0
        this.done = false
    }
    
    display(){
    }

    isDone(){
    }

    inside(x, y){
    }

    continue(){
    }
}