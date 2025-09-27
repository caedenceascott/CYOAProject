// 23232323232323232323
class BigGuyImage {
    constructor(){
        this.buttons = [new Button(1.1, 'QUIT', 0)]
        this.buttons.push(new Button(1.3, 'Continue', 12))
        this.image = loadImage('media/Big Guy ending.jpg')
    }

    display(){
        for(let i of this.buttons){
            i.display()
        }

        image(this.image, width/2, height/2.8, width/1.5, height/1.5)
    }

    buttonCheck(x, y){
        for (let i of this.buttons){
            if(i.inside(x, y)){
                return i
            }
        }
    }
}

// 24242424242424242424
class CallImage {
    constructor(){
        this.buttons = [new Button(1.1, 'QUIT', 0)]
        this.buttons.push(new Button(1.3, 'Continue', 18))
        this.image = loadImage('media/Call Ending.jpg')
    }

    display(){
        for(let i of this.buttons){
            i.display()
        }

        image(this.image, width/2, height/2.8, width/1.5, height/1.5)
    }

    buttonCheck(x, y){
        for (let i of this.buttons){
            if(i.inside(x, y)){
                return i
            }
        }
    }
}

// 252525252525252525
class CensoredImage {
    constructor(){
        this.buttons = [new Button(1.1, 'QUIT', 0)]
        this.image = loadImage('media/Censored Ending Final.png')
    }

    display(){
        for(let i of this.buttons){
            i.display()
        }

        image(this.image, width/2, height/2.4, width/1.5, height/1.5)
    }

    buttonCheck(x, y){
        for (let i of this.buttons){
            if(i.inside(x, y)){
                return i
            }
        }
    }
}