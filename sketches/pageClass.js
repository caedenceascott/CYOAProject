// base page class
class Page {
    constructor(){
        this.buttons = []
        this.proxs = []
        this.ints = []
        this.active = new Null()
        this.active.done = true
        this.nPage = null
    }

    initPlayer(){
        player.xSpeed = 0
        player.ySpeed = 0
    }

    display(){
        for(let i of this.buttons){
            i.display()
        }

        for (let i = 0; i < this.proxs.length; i ++){
            this.proxs[i][1].isDone()
            if (this.proxs[i][0].inside(player.x, player.y)){
                this.proxs[i][1].display()
                this.active = this.proxs[i][1]
            }
        }

        for (let i = 0; i < this.ints.length; i ++){
            //console.log(this.ints[i][1].done)
            this.ints[i][1].isDone()
            if (this.ints[i][0].visible && !this.ints[i][1].done){
                this.ints[i][0].display()
            }

            if (this.ints[i][0].triggered){
                this.ints[i][1].display()
                this.active = this.ints[i][1]
            }

            if(this.ints[i][1].done){
                this.ints[i][0].triggered = false
                this.active = new Null()
            }
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

    continueCheck(x, y){
        if(this.active.inside(x, y)){
            return true
        }

        /*for (let i of this.proxs){
            if(i[1].inside(x, y)){
                console.log(i)
                return i
            }
        }

        for (let i of this.ints){
            //console.log(i[0].visible)
            if(i[1].inside(x, y)){
                return i[1].inside(x, y)
            }
        }*/
    }

    intCheck(){
        for (let i of this.ints){
            if(i[0].inside() && !i[0].triggered){
                return i
            }
        }
    }

    update(){
        player.update(mouseX, mouseY)
    }

    nextPage(){

    }
}