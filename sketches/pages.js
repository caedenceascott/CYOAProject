//00000000000000000000000000
class Homepage extends Page{
    constructor(){
        super()
        this.buttons = [new Button(2, 1.7, 1.7,  'START', 1)]
    }

    display(){
        super.display()
        fill(light)
        textSize(height/10)
        text('T A T T O O   O F   D E A T H', width/2, height*2/5)
        textSize(height/26)
        text('An Interactive Storybook by Caedence Scott\nbased on the Choose Your Own Adventure book by R. A. Montgomery', width/2, height/1.1)
    }
    
    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}



// 11111111111111111111
class PageOne extends Page{
    constructor(){
        super()
        this.ints = [
            [new Int(.15, .6, false), new Dia([
                ['BEN', "'Hey man! Are you headed out?'"], 
                ['BEN', "'We were planning on going to the amusement park.'"],
                ['SPRAZZ', "'Yah it shouldn't be too busy today, there'll be no lines for the rides!'"],
                ['BEN', "'You've gotta come with us dude, we have an extra ticket that'll just go to waste if you don't.'"],
                ['SPRAZZ', "'Come on, let's get going. It'll be so awesome!'"]
            ])],
        ]

        this.proxs = [
            [new Prox(.5, .6, .5), new Nar(["It all started when you joined tai chi. You chose tai chi rather than karate\nor tae kwon do because you didn't want to hurt anyone, just protect yourself.\nYou'll discover soon enough that it was the wrong choice for that goal."])], //tai chi mat
            [new Prox(.2, .55, .4), new Nar(["Your first day, you met two boys: Ben and Sprazzle. You should have known from the start that\nanyone with the name Sprazzle would be a little suspect. Ben was a natural at tai chi; Sprazzle was\nnot. You did quite well, and you enjoyed the smooth, studied, slow movements.", "Ben and Sprazzle took you under their wing immediately, helping you in tai chi, but also\nbefriending you outside of lessons. It was clearly a setup, but hindsight is 20/20. It started with a\ncoffee, which they refused to let you pay for. More free snacks here and there, and most recently\nit was a free movie."])] //ben sprazz prox
        ]
        this.nPage = '2'
        this.playable = true
        this.bg = loadImage('media/dojo.jpg')
    }

    initPlayer(){
        super.initPlayer()
        player.x = .9
        player.y = .3
    }

    display(){
        image(this.bg, width/2, height/2, width, height)
        player.display()
        player.move()

        super.display()
        if(this.proxs[1][1].done){
            this.ints[0][0].visible = true
        }
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }

    continueCheck(x, y){
        return super.continueCheck(x, y)
    }

    intCheck(x, y){
        return super.intCheck(x, y)
    }

    update(){
        super.update()
    }

    nextPage(){
        if(this.ints[0][1].done){
            return this.nPage
        }
    }
}


//222222222222222222222
class PageTwo extends Page{
    constructor(){
        super()
        this.ints = []
        this.proxs = [
            [new Prox(.1, .5, .3), new Nar(['At the end of the day when you leave the amusement park, Ben\nand Sprazz lead you to a van waiting in the parking lot.'])],
            [new Prox(.7, .5, .8), new Dia([
                ['BEN', "'This is our ride, let's go.'"]
            ])],
            [new Prox(.6, 0, .5), new Dia([
                ['SPRAZZ', "'Come on Tulip, we won't wait all day.'"]
            ])]
        ]
        this.nPage = '3'
        this.playable = true
        this.bg = loadImage('media/parking lot.jpg')
    }

    initPlayer(){
        super.initPlayer()
        player.x = .1
        player.y = .3
    }

    display(){
        image(this.bg, width/2, height/2, width, height)
        player.display()
        player.move()

        super.display()
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }

    continueCheck(x, y){
        return super.continueCheck(x, y)
    }

    intCheck(x, y){
        return super.intCheck(x, y)
    }

    update(){
        super.update()
    }

    nextPage(){
        if(player.x > .7){
            return this.nPage
        }
    }
}


//333333333333333
class PageThree extends Page{
    constructor(){
        super()
        this.ints = [[new Int(.46, .66, false), new Dia([
                ['ANACONDA', "'Better get to it, Tulip. You don't want to see what happens when I get angry.'"]])],
            [new Int(.46, .66, false), new Dia([
                ['ANACONDA', "'Hurry up, Big Guy's waiting.'"]])],
            [new Int(.07, .5, false), new Nar(["Stacks of forged documents and materials linking you to the Red\nFlower gang. It appears Anaconda is prepared to blackmail you."
            ])],
            [new Int(.95, .6, false), new Choice('Exit?', 'Stay', 'Leave')]
        ]
        this.proxs = [
            [new Prox(.5, .2, .1), new Nar(["You wake up with no clue as to how you got here. The last thing you remember is walking\ntowards the van at the amusement park. Something is making your right forearm sting. You look down\nand see that they've given you a red flower tattoo, the mark of the notorious Red Flower gang."])],
            [new Prox(.5, 1.2, 1), new Dia([
                ['????', "'Okay, Tulip, listen up, here's what's gonna happen now.'"],
                ['YOU', "'Ben? Sprazz? What's going on? Who is this guy? Who's Tulip?'"],
                ["????", "'Hey! I'm doing the talking right now, so shut your mouth, Tulip.'"],
                ["ANACONDA", "'They call me Anaconda. My boss needs to have a little chat with your dad, says he's some sort\nof big shot attorney? That's the kind of backing our organization here could make some good use of.\nSee, Big Guy's wantin' to expand his business but he's gonna need your dad's protection to do that.'"],
                ['ANACONDA', "'All we're gonna need you to do is just get your dad to meet up with Big Guy. Simple. I'm sure Big\nGuy won't be wantin' to bother with you any further as long as you do that for us, okay?'"],
                ['YOU', "'And why would I do that?'"],
                ["ANACONDA", "'Oh, you wouldn't want to cross Big Guy. You don't do this for\nus, or you go crying to the cops, and there'll be some big consequences.'"],
                ["SPRAZZ", "'Yah, the deadly kind!'"],
                ["ANACONDA", "'Shut up, Sprazz."]
            ])]
        ]
        this.nPage = '4'
        this.playable = true
        this.bg = loadImage('media/warehouse 1.jpg')
    }

    initPlayer(){
        super.initPlayer()
        player.x = .5
        player.y = .15
    }

    display(){
        image(this.bg, width/2, height/2, width, height)
        player.display()
        player.move()

        
        if(this.proxs[1][1].done){
            this.ints[0][0].visible = true
            this.ints[2][0].visible = true
            if(this.ints[0][1].done){
                this.ints[1][0].visible = true
            }

            this.ints[3][0].visible = true
            if(this.ints[3][1].chosen === '2'){
                this.ints[3][0].triggered = false
            }
        }

        if (this.ints[0][0].triggered){
                this.active = this.ints[0][1]
                //console.log(this.active)
        } else if(this.ints[1][0].triggered){
                this.active = this.ints[1][1]
        } else if(this.ints[2][0].triggered){
                this.active = this.ints[2][1]
                console.log(this.active)
        } else if(this.ints[3][0].triggered){
                this.active = this.ints[3][1]
        }
        

        super.display()
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
                //console.log(i, 'done')
                this.ints[i][0].triggered = false
                //this.active = new Null()
            }
        }

    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }

    continueCheck(x, y){
        return super.continueCheck(x, y)
    }

    intCheck(x, y){
        this.ints[3][1].chosen = null
        if(this.ints[1][0].inside() && !this.ints[1][0].triggered){
                console.log(this.ints[1][0])
                return this.ints[1]
            } else{
                return super.intCheck(x, y)
            }
        

    }

    update(){
        super.update()
        this.ints[3][1].chosen = null
    }

    nextPage(){
        if (this.ints[3][1].chosen === '1'){
            return this.nPage
        }
    }
}

class PageFour extends Page{
    constructor(){
        super()
        this.buttons = [new Button(2, 1.3, 1.7,  'Hide', 13), 
            new Button(2, 1.5, 1.7, 'Meet with Big Guy', 5)
        ]
    }

    display(){
        super.display()
        fill(light)
        textSize(height/26)
        text("You decide you have two options at this point: hide from the Red Flowers\nuntil you can figure out a better plan, or, since you don't want to drag your father\ninto this mess, go meet with Big Guy yourself.", width/2, height/3)
    }
    
    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

class PageFive extends Page{
    constructor(){
        super()
        this.ints = [[new Int(.625, .46, true), new Dia([
            ['YOU', "'Okay, I'll do what you guys want.'"],
            ['BEN', "'Glad to see you're thinking clearly. It woulda been a\nmess to deal with if you'd gone to the cops.'"],
            ['YOU', "'I have one condition though. Let me meet with Big Guy instead of my dad.'"],
            ['SPRAZZ', "'Why would you want to do that? Big Guy's obviously gonna ki—'"],
            ['BEN', "'Sprazz, be quiet.'"],
            ['BEN', "'He does have a point though. Why should we send you instead?'"],
            ['YOU', "'Think about it. My dad doesn't know you guys, even if he did agree to meet with Big Guy,he's not\nvery likely to cooperate with everything completely. You'll have more control if you send me.'"],
            ['BEN', "'Okay, whatever. I'll talk to Anaconda, you'll need his go ahead, not mine.'"]
        ])]]
        this.proxs = []
        this.nPage = '6'
        this.playable = true
        this.bg = loadImage('media/warehouse 2.jpg')
    }

    initPlayer(){
        super.initPlayer()
        player.x = .9
        player.y = .35
    }

    display(){
        image(this.bg, width/2, height/2, width, height)
        player.display()
        player.move()

        super.display()
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }

    continueCheck(x, y){
        return super.continueCheck(x, y)
    }

    intCheck(x, y){
        return super.intCheck(x, y)
    }

    update(){
        super.update()
    }

    nextPage(){
        if(this.ints[0][1].done){
            return this.nPage
        }
    }
}

class PageSix extends Page{
    constructor(){
        super()
        this.buttons = [new Button(2, 1.5, 1.7, 'Continue', 7)
        ]
    }

    display(){
        super.display()
        fill(light)
        textSize(height/26)
        text("Plans were made, and now you're arriving at Narita International Airport. A smiling\nwell-dressed young woman is waiting at the exit to passport control. She holds a sign labeled\nwith your name. Introducing herself as Sabaruki, she takes you to a cab, which takes you\nto your hotel. She tells you you'll stay there tonight before going to meet with Big Guy tomorrow.", width/2, height/3)
    }
    
    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

class PageSeven extends Page{
    constructor(){
        super()
        this.ints = [[new Int(.2, .85, false), new Choice('Leave to meet with Sabaruki?', 'Leave', 'Stay')],
            [new Int(.2, .85, false), new Choice('Meet with Sabaruki or or sneak out to meet with the yakuza?', 'Sneak out', 'Ignore the letter')],
            [new Int(.3, .7, true), new Nar(["A letter slid under your door. It's from the yakuza. They are demanding\nthat you don't meet with Big Guy and go instead to the address they listed."])]
        
        ]
        this.proxs = [[new Prox(.3, .7, .3), new Dia([['SABARUKI  (from the hallway)', "'We have to leave in ten minutes, meet me in the lobby as soon as you're ready.'"]])]]
        this.nPage = null
        this.playable = true
        this.bg = loadImage('media/hotel.jpg')
    }

    initPlayer(){
        super.initPlayer()
        player.x = .65
        player.y = .3
    }

    display(){
        image(this.bg, width/2, height/2, width, height)
        player.display()
        player.move()

        super.display()
        if(this.proxs[0][1].done){
            if(this.ints[2][1].done){
                this.ints[1][0].visible = true
                this.ints[0][0].visible = false
            } else if(!this.ints[2][1].done){
                this.ints[0][0].visible = true  
            }

            if (this.ints[1][0].visible && this.ints[1][0].triggered){
                this.active = this.ints[1][1]
            }

            if(this.ints[0][1].chosen === '1'){
                this.ints[0][0].triggered = false
            }
        }
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }

    continueCheck(x, y){
        return super.continueCheck(x, y)
    }

    intCheck(x, y){
        this.ints[0][1].chosen = null
        this.ints[1][1].chosen = null
        return super.intCheck(x, y)
    }

    update(){
        super.update()
        this.ints[0][1].chosen = null
        this.ints[1][1].chosen = null
    }

    nextPage(){
        if(this.ints[2][1].done){
            if(this.ints[1][1].chosen === '1'){
                this.nPage = '9'
            } else if(this.ints[1][1].chosen === '2'){
                this.nPage = '8'
            }
            return this.nPage
        } else if(!this.ints[2][1].done){
            if(this.ints[0][1].chosen === '2'){
                this.nPage = '9'
            }
            return this.nPage
        }
    }
}

class PageEight extends Page{
    constructor(){
        super()
    }

    display(){
        super.display()
        fill(light)
        textSize(height/26)
        text("The yakuza are not happy that you're working with the Red Flowers. You are never seen again.", width/2, height/2)
        textSize(height/40)
        text("Refresh the page to restart.", width/2, height/1.1)
    }
    
    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

class PageNine extends Page{
    constructor(){
        super()
        this.buttons = [new Button(2, 1.5, 1.7, 'Continue', 10)]
    }

    display(){
        super.display()
        fill(light)
        textSize(height/26)
        text("You have enough on your plate with the Red Flowers, and you don't need to complicate\nthings any further. You throw away the letter and head down to the hotel lobby to meet with\nSabaruki. She is waiting for you there, impatient after you took so long to come down, and\nleads you straight to the car that will take you to Big Guy. ", width/2, height/3)
    }
    
    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

class PageTen extends Page{
    constructor(){
        super()
        this.ints = [[new Int(.66, .45, false), new Nar(['Lifesize marble statues? Is that really necessary?'])],
            [new Int(.28, .4, false), new Nar(['The wallpaper seems to be woven with gold flakes.'])],
            [new Int(.5, .4, false), new Nar(['The painting looks familiar. You think it may be by an artist you studied in history class.'])],
            
        ]
        this.proxs = [[new Prox(.1, .5, 1), new Dia([['SABARUKI', 'Wait here. Big Guy will be ready for you shortly.']])]]
        this.nPage = '11'
        this.playable = true
        this.bg = loadImage('media/mansion.jpg')
    }

    initPlayer(){
        super.initPlayer()
        player.x = .15
        player.y = .35
    }

    display(){
        image(this.bg, width/2, height/2, width, height)
        player.display()
        player.move()
        super.display()

        if(this.proxs[0][1].done){
            this.ints[2][0].visible = true
            this.ints[0][0].visible = true
            this.ints[1][0].visible = true

        }

        ////////you were trying to problem solve the ints not always recognizing mouse
        if(this.ints[0][0].triggered){
            this.active = this.ints[0][1]
        } else if(this.ints[1][0].triggered){
             console.log('triggered')
             this.active = this.ints[1][1]
        } else if(this.ints[2][0].triggered){
            this.active = this.ints[2][1]
        } 
        
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }

    continueCheck(x, y){
        return super.continueCheck(x, y)
    }

    intCheck(x, y){
        return super.intCheck(x, y)
    }

    update(){
        super.update()
    }

    nextPage(){
        if (this.ints[0][1].done && this.ints[1][1].done && this.ints[2][1].done){
            return this.nPage
        }

    }
}

class PageEleven extends Page{
    constructor(){
        super()
        this.ints = []
        this.proxs = [[new Prox(.5, .5, 2), new Dia([
            ["", "You enter the room, and see the man himself. Though, you're not sure if man is the right word.\nHe is all metal and wires, and you quickly realize, whether he was once a man or not, he sure isn't\nnow. He starts speaking before you can even fully comprehend what you're looking at."], 
            ['BIG GUY', "'You have come here to speak for your father?'"],
            ["YOU", "'I have.'"],
            ['BIG GUY', "'He is in a position to open doors for me, to protect me from the authorities.\nYou convince your father to work for me, and I can ensure you both are well paid.'"],
            ["YOU", "'What if he won't agree to help?'"],
            ["BIG GUY", "'Well that would be a big problem of course, but nothing we couldn't\nhandle. A piece or two of you in his mailbox and he'll come around.'"]
        ])]]
        this.nPage = '12'
        this.playable = true
        this.bg = loadImage('media/office.jpg')
    }

    initPlayer(){
        super.initPlayer()
        player.x = .5
        player.y = .35
    }

    display(){
        image(this.bg, width/2, height/2, width, height)
        player.display()
        player.move()

        super.display()
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }

    continueCheck(x, y){
        return super.continueCheck(x, y)
    }

    intCheck(x, y){
        return super.intCheck(x, y)
    }

    update(){
        super.update()
    }

    nextPage(){
        if(this.proxs[0][1].done){
            return this.nPage
        }

    }
}

class PageTwelve extends Page{
    constructor(){
        super()
    }

    display(){
        super.display()
        fill(light)
        textSize(height/26)
        text("The reality of the situation comes crashing down on you. You are a hostage.\nYou have been kidnapped. Kidnapped by yourself. You got on the plane, you\ncame to Japan. You made yourself a hostage. And this man, thing, whatever he may be,\nhe'll do anything to get what he wants. No matter what you do, you'll end up dead either\nway, so you may as well make it count. You lunge at Big Guy and grab a handful of wires.\nYou rip them from his body, and his right arm goes limp. Unfortunately, Big Guy built\nhimself with the means to fight back. His mechanical eyes turn straight at you, you feel as\nif they are staring through your soul. You see a flash of light, and two laser beams\nshoot straight through your chest.", width/2, height/2)
        textSize(height/40)
        text("Refresh the page to restart.", width/2, height/1.1)
    }
    
    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

class PageThirteen extends Page{
    constructor(){
        super()
        this.buttons = [new Button(2, 1.5, 1.7, 'Continue', 14)]
    }

    display(){
        super.display()
        fill(light)
        textSize(height/26)
        text("The Red Flowers are dangerous, so you decide to go into hiding where you can think\nmore on what to do next. You rememeber an old beachhouse your mom's company\nowns; it's the off season so it'll be empty right now.", width/2, height/3)
    }
    
    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

class PageFourteen extends Page{
    constructor(){
        super()
        this.ints = [[new Int(.25, .15, true), new Nar(['You expected the place to be covered in dust, but it appears to be recently cleaned.'])], [new Int(.95, .6, true), new Nar(['The fridge is empty except for a few beers.'])]]
        this.proxs = []
        this.nPage = '15'
        this.playable = true
        this.bg = loadImage('media/house.jpg')
    }

    initPlayer(){
        super.initPlayer()
        player.x = .1
        player.y = .5
    }

    display(){
        image(this.bg, width/2, height/2, width, height)
        player.display()
        player.move()

        super.display()

        
        if(this.ints[0][0].triggered){
            this.active = this.ints[0][1]
        } else if(this.ints[1][0].triggered){
             console.log('triggered')
             this.active = this.ints[1][1]
        }
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }

    continueCheck(x, y){
        return super.continueCheck(x, y)
    }

    intCheck(x, y){
        return super.intCheck(x, y)
    }

    update(){
        super.update()
    }

    nextPage(){
        if(this.ints[0][1].done && this.ints[1][1].done){
            return this.nPage
        }
    }
}

class PageFifteen extends Page{
    constructor(){
        super()
        this.ints = [[new Int(.6, .1, false), new Choice('Escape out the upstairs window, or stay to eavesdrop for more information about their operation?', 'Stay', 'Escape')]]
        this.proxs = [[new Prox(.5, .5, 2), new Dia([
            ['SPRAZZ  (from outside)', "'...think he'll do it?'"],
            ["BEN  (from outside)", "'Of course he will.'"],
            ['SPRAZZ (from outside)', "'Then why'd he run away?'"],
            ['BEN (from outside)', "'Because he's scared, and he should be. He'll realize soon enough he's got no options and come back.'"],
            ['BEN (from outside)', "'Now come on, we've gotta prep the house for the tonight's cargo drop.'"],
            ['', "The voices sound close now; Ben and Sprazz must be right at the door.\nYou should escape before they realize you're there, but you could stay and try\nto get more information before alerting the police."]
        ])]]
        this.nPage = null
        this.playable = true
        this.bg = loadImage('media/house.jpg')
    }

    initPlayer(){
        super.initPlayer()
    }

    display(){
        image(this.bg, width/2, height/2, width, height)
        player.display()
        player.move()

        super.display()

        if(this.proxs[0][1].done){
            this.ints[0][0].visible = true
        }
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }

    continueCheck(x, y){
        return super.continueCheck(x, y)
    }

    intCheck(x, y){
        return super.intCheck(x, y)
    }

    update(){
        super.update()
    }

    nextPage(){
        if(this.ints[0][1].chosen === '1'){
            this.nPage = '16'
        } else if(this.ints[0][1].chosen === '2'){
            this.nPage = '19'
        }
        return this.nPage

    }
}

class PageSixteen extends Page{
    constructor(){
        super()
        this.buttons = [new Button(2, 1.3, 1.7,  'Run', 17), 
            new Button(2, 1.5, 1.7, 'Warn Ben and Sprazz', 20)
        ]
    }

    display(){
        super.display()
        fill(light)
        textSize(height/26)
        text("You open the window and go out onto the roof. Just as you're about to climb down, a car\npulls up in front of the house. The windows are down, and you can hear Anaconda talking to\nsomeone in the passenger seat. The way he's talking to Anaconda, it must be his boss, Big\nGuy, and he just told Anaconda to kill Ben and Sprazz.", width/2, height/3)
    }
    
    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

class PageSeventeen extends Page{
    constructor(){
        super()
        this.ints = [[new Int(.295, .1, true), new Nar(['You knock on the front door. You think you see movement through the window. No one answers.'])],
            [new Int(.28, .94, true), new Nar(["You ring the doorbell. You notice a 'No Soliciting' sign. No one answers."])],
            [new Int(.7, .1, true), new Nar(['You knock on the front door. A dog barks. No one answers.'])],
            [new Int(.705, .94, true), new Dia([
                ['', 'You ring the doorbell. After a few seconds of waiting, you hear footsteps. The door opens.'],
                ['OLD WOMAN', "'What can I do for you, young man?'"],
                ['YOU', "'Excuse me miss—sorry to bother you—may I use your phone?\nThere's these scary guys—I think they're gonna do something bad—I have to call the—'"],
                ['OLD WOMAN', "'Calm down now, here's my phone. Call whoever you need.'"]
            ])]
        ]
        this.proxs = []
        this.nPage = '18'
        this.playable = true
        this.bg = loadImage('media/neighborhood.jpg')
    }

    initPlayer(){
        super.initPlayer()
        player.x = .1
        player.y = .3
    }

    display(){
        image(this.bg, width/2, height/2, width, height)
        player.display()
        player.move()

        super.display()

        for (let i = 0; i < this.ints.length; i ++){
            if (this.ints[i][0].triggered){
                this.active = this.ints[i][1]
            }
        }
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }

    continueCheck(x, y){
        return super.continueCheck(x, y)
    }

    intCheck(x, y){
        return super.intCheck(x, y)
    }

    update(){
        super.update()
    }

    nextPage(){
        if(this.ints[3][1].done){
            return this.nPage
        }
    }
}

class PageEighteen extends Page{
    constructor(){
        super()
    }

    display(){
        super.display()
        fill(light)
        textSize(height/26)
        text("You call the cops. They send a squad car, but by the time it gets there, it's too late. There's\nno sign of anyone having been in the house at all, let alone a crime scene. The police think you're\nlying about the story; with no evidence at the house, how could they believe you? You call your\ndad and explain the situation. He believes you. Together, you try again to convince the police, and\nwith your dad's help, they agree to send a larger force to intercept the cargo drop tonight. Finally\neverything can come to a close, you'll no longer be running from the gang, and they'll all be\narrested for their crimes. When the time comes for the drop, the cops discover that Big Guy was\nready for an attack. Both him and Anaconda, along with all their gang members, turn the beach into\na bloodbath. They get away, and you vow to spend your life hunting them down.", width/2, height/2)
        textSize(height/40)
        text("Refresh the page to restart.", width/2, height/1.1)
    }
    
    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

class PageNineteen extends Page{
    constructor(){
        super()
    }

    display(){
        super.display()
        fill(light)
        rect(.5 * width, height/1.5, .65 * width, .07 * height)
        textSize(height/26)
        text("With Ben and Sprazz now inside, you stay hidden, trying to hear more of their conversation\nwithout being noticed. You hear the front door open. Someone enters and starts threatening\nBen and Sprazz. It's Anaconda. You peak around the corner to see whats going on, and\nwatch as Anaconda grabs both Ben and Sprazz and—", width/2, height/2)
        fill(dark)
        text('CENSORED DUE TO EXCESSIVE AND GRUESOME VIOLENCE', width/2, height/1.5)
        fill(light)
        textSize(height/40)
        text("Refresh the page to restart.", width/2, height/1.1)
    }
    
    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}
class PageTwenty extends Page{
    constructor(){
        super()
    }

    display(){
        super.display()
        fill(light)
        rect(.5 * width, height/1.5, .65 * width, .07 * height)
        textSize(height/26)
        text("Having climbed back in through the window, you start heading down to warn Ben and Sprazz\nof what you heard. Still hidden on the stairs, you hear the front door open. Someone enters and\nstarts threatening Ben and Sprazz. It's Anaconda. You peak around the corner to see whats\ngoing on,and watch as Anaconda grabs both Ben and Sprazz and—", width/2, height/2)
        fill(dark)
        text('CENSORED DUE TO EXCESSIVE AND GRUESOME VIOLENCE', width/2, height/1.5)
        fill(light)
        textSize(height/40)
        text("Refresh the page to restart.", width/2, height/1.1)
    }
    
    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}