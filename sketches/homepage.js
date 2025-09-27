//00000000000000000000000000
class Homepage extends Page{
    constructor(){
        super()
        this.buttons = [new Button((1.7), 'START', 1)]
    }

    display(){
        super.display()
        fill(light)
        textSize(height/10)
        text('T A T T O O   O F   D E A T H', width/2, height*2/5)
        textSize(height/26)
        text('A Digital Storybook by Caedence Scott\nbased on the Choose Your Own Adventure book by R. A. Montgomery', width/2, height/1.1)
    }
    
    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}