//11111111111111111111111
class StartOne extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 2))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("It all started when you joined tai chi." +
            "\n \nYou chose tai chi rather than karate or tae kwon do because you" +
            "\ndidn't want to hurt anybody, just protect yourself. You'll discover" +
            "\nsoon enough that it was the wrong choice for that goal.", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//2222222222222222222222222
class StartTwo extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 3))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("Your first day, you met two boys: Ben and Sprazzle. You should have" +
            "\nknown from the start that anyone with the name Sprazzle would be a" +
            "\nlittle suspect. Ben was a natural at tai chi; Sprazzle was not. You did" +
            "\nquite well, and you enjoyed the smooth, studied, slow movements. Ben" +
            "\nand Sprazzle took you under their wing immediately, helping you in tai chi," +
            "\nbut also befriending you outside of lessons. It was clearly a setup, but" +
            "\nhindsight is 20/20. It started with a coffee, which they refused to let you" +
            "\npay for. More free snacks here and there, then it was a free movie, then a" +
            "\ntrip to a nearby amusement park.", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//3333333333333333333333333
class StartThree extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 4))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("At the end of the day when you were leaving the amusement park, Ben" +
            "\nand Sprazz led you to a van waiting in the parking lot. You saw a large" +
            "\nman opening the back doors, then felt something hit the back of your head," +
            "\nand you remember nothing after that.", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//44444444444444444444444444
class StartFour extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 5))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("You wake up eventually. Ben and Sprazz are standing in front of you with" +
            "\nthe man from the van, and something is making your right forearm sting." +
            "\nYou look down and see that they've given you a red flower tattoo, the mark" +
            "\nof the notorious Red Flower gang. The man, who you now know goes by" +
            "\nAnaconda, demands that you set up a meeting between his boss, Big Guy," +
            "\nand your dad. What kind of mob boss goes by the name 'Big Guy'?", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//555555555555555555555
class StartFive extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Meet with Big Guy', 6))
        this.buttons.push(new Button(1.5, 'Hide', 14))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("Your dad is a bigshot attorney who can help them continue their business" +
            "\nif they can get you and him to cooperate. After hearing their plans for" +
            "\nyou, you run. They let you go, after all, they forged plenty of blackmail" +
            "\nto get you to work for them. In your frantic state, you can think of" +
            "\nonly two options: hide and hope they can't find you, or protect your" +
            "\nfather by meeting with Big Guy yourself instead.", 
            width/2, height/2.9)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//666666666666666666666666
class JapanOne extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 7))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("As it turns out, Big Guy is in Japan. Once you made your decision, you met" +
            "\nwith Ben and Sprazz. You convinced them that they would maintain more" +
            "\ncontrol if you met with Big Guy instead of your father, and they reluctantly" +
            "\nagreed. Plans were made, and now you're arriving at Narita International" +
            "\nAirport. A smiling, well-dressed young woman is waiting at the exit to" +
            "\npassport control. She holds a sign labeled with your name. ", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//777777777777777777777777
class JapanTwo extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Ignore the Letter', 9))
        this.buttons.push(new Button(1.5, 'Go to the Address Listed', 8))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("She introduces herself as Sabaruki, and takes you to a cab, which takes you" +
            "\nto your hotel. She tells you you'll stay there tonight before going to meet" +
            "\nwith Big Guy tomorrow. When you wake up in the morning, you find a letter" +
            "\nslid under your door. It's from the yakuza. They are demanding that you" +
            "\ndon't meet with Big Guy and go instead to the address they listed.", 
            width/2, height/2.9)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//8888888888888888888888
class Yakuza extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 10))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("You decide to listen to the letter; you think the yakuza may be even more" +
            "\ndangerous than the Red Flowers, and you don't want to get on their bad" +
            "\nside. You sneak out a back entrance to the hotel, in hopes to avoid running" +
            "\ninto Sabaruki and having to explain yourself. You had looked up the address" +
            "\nbeforehand and found it was close by, so you decide to walk rather than" +
            "\ntake a cab. About halfway there, a car pulls up right beside you. Of course" +
            "\nnothing could go smoothly. The door opens, and Sabaruki steps out. It turns" +
            "\nout you won't be meeting with the yakuza after all. ", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//9999999999999999999999
class Ignore extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 10))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("You have enough on your plate with the Red Flowers, and you don't need to" +
            "\ncomplicate things any further. You throw away the letter and head down to" +
            "\nthe hotel lobby to meet with Sabaruki. She is waiting for you there," +
            "\nimpatient after you took so long to come down, and leads you straight to" +
            "\nthe car that will take you to Big Guy. ", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//10101010101010101
class LasersOne extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 11))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("Big Guy is in a mansion on the outskirts of the city. You're amazed at the" +
            "\nsize of the place, but you shouldn't be surprised, this man's business brings" +
            "\nin a lot of money. Sabaruki takes you to the library where you're to wait" +
            "\nuntil Big Guy is ready for you. After what seems like hours, she returns," +
            "\nand you follow her to Big Guy's office. You enter the room, and see the man" +
            "\nhimself. Though, you're not sure if man is the right word. He is all metal and" +
            "\nwires, and you quickly realize, whether he was once a man or not, he sure"+
            "\nisn't now. ", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//11 11 11 11 11 11 11 11 
class LasersTwo extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 23))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("He starts speaking before you can even fully comprehend what you're" +
            "\nlooking at, 'You have come here to speak for your father. He is in a" +
            "\nposition to open doors for me, to protect me from the authorities. You" +
            "\nconvince your father to work for me, and you both will be well paid.'" +
            "\n'What if he won't agree to help?' you say." +
            "\n'Well that would be a big problem of course, but nothing we couldn't" +
            "\nhandle. A piece or two of you in his mailbox and he'll come around.'" +
            "\nThe reality of the situation comes crashing down on you.", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//12121212121212121212
class LasersThree extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 13))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("You are a hostage. You have been kidnapped. Kidnapped by yourself. You" +
            "\ngot on the plane, you came to Japan. You made yourself a hostage. And" +
            "\nthis man, thing, whatever he may be, he'll do anything to get what he" +
            "\nwants. No matter what you do, you'll end up dead either way, so you" +
            "\nmay as well make it count. You lunge at Big Guy and grab a handful of" +
            "\nwires. You rip them from his body, and his right arm goes limp.", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//1313131313131313131313
class LasersFour extends Page{
    constructor(){
        super()
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("Unfortunately, Big Guy built himself with the means to fight back. His" +
            "\nmechanical eyes turn straight at you, you feel as if they are staring" +
            "\nthrough your soul. You see a flash of light, and two laser beams shoot" +
            "\nstraight through your chest.", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//141414141414141414
class HideOne extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 15))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("The Red Flowers are dangerous, so you decide to go into hiding where" +
            "\nyou can think more on what to do next. You rememeber an old beach house" +
            "\nyour mom's company owns; it's the off season so it'll be empty right now." +
            "\nOnce you arrive, you find the key under the flower pot next to the front" +
            "\ndoor, and go inside. After such a stressful day, you're too exhausted to" +
            "\nthink. You go upstairs and go right to sleep. ", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//151515151515151515
class HideTwo extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Escape', 16))
        this.buttons.push(new Button(1.5, 'Stay', 21))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("You wake up in the morning to the sound of voices. You creep down a few" +
            "\nstairs and realize you recognize them; it's Ben and Sprazz. As you" +
            "\nlisten, you learn they're not here for you. It was one big coincidence," +
            "\nthe Red Flowers have been using this house as a cargo drop point, and" +
            "\nthere's going to be one tonight. You should escape before Ben and Sprazz" +
            "\nrealize you're there, but you could stay and try to get more information" +
            "\nbefore alerting the police. ", 
            width/2, height/2.9)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//1616161616161616
class Escape extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Run', 17))
        this.buttons.push(new Button(1.5, 'Warn Ben and Sprazz', 20))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("You go back up the stairs as quietly as you can, open a window, and go" +
            "\nout onto the roof. Just as you're about to climb down, a car pulls up in" +
            "\nfront of the house. The windows are down, and you can hear Anaconda" +
            "\ntalking to someone in the passenger seat. The way he's talking to" +
            "\nAnaconda, it must be his boss, Big Guy, and he just told Anaconda to" +
            "\nkill Ben and Sprazz. ", 
            width/2, height/2.9)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//171717171717171717
class RunOne extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 24))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("You want to help Ben and Sprazz, but Anacaonda is a scary man and" +
            "\nthere's nothing you can do here to help them. You climb down from the" +
            "\nroof and run to a neighbor's house. You knock on their front door," +
            "\nand when they answer, you frantically ask to use their phone. You call" +
            "\nthe cops. They send a squad car, but by the time it gets there, it's" +
            "\ntoo late. There's no sign of anyone having been in the house at all," +
            "\nlet alone a crime scene.", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//1818181818181818
class RunTwo extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 19))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("The police think you're lying about the story; with no evidence at the" +
            "\nhouse, how could they believe you? You call your dad and explain the" +
            "\nsituation. He believes you. Together, you try again to convince the" +
            "\npolice, and with your dad's help, they agree to send a larger force to" +
            "\nintercept the cargo drop tonight. Finally everything can come to a close," +
            "\nyou'll no longer be running from the gang, and they'll all be arrested" +
            "\nfor their crimes.", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//19191919191919
class RunThree extends Page{
    constructor(){
        super()
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("When the time comes for the drop, the cops discover that Big Guy was" +
            "\nready for an attack. Both him and Anaconda, along with all their gang" +
            "\nmembers, turn the beach into a bloodbath. They get away, and you vow to" +
            "\nspend your life hunting them down.", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//202020202020202020
class Warn extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 22))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("You can't just let Ben and Sprazz die like this, you have to warn them" +
            "\nof what Anaconda is going to do. You climb back in the window and" +
            "\nstart to head down the stairs.", 
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//212121212121212121
class Stay extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 22))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("You decide to stay and listen in for more information. You want to go" +
            "\nto the police with as much information as possible to ensure the Red" +
            "\nFlowers are put away for good.",
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}

//22 22 22 22 22 22 22 22 
class Anaconda extends Page{
    constructor(){
        super()
        this.buttons.push(new Button(1.3, 'Continue', 25))
    }
    display(){
        super.display()
        fill(light)
        textSize(height/20)
        text("Still hidden on the stairs, you hear the front door open. Someone" +
            "\nenters and starts threatening Ben and Sprazz. It's Anaconda. You peak" +
            "\naround the corner to see whats going on, and watch as Anaconda grabs" +
            "\nboth Ben and Sprazz, and -" +
            "\n\nCENSORED DUE TO EXCESSIVE GRUESOME VIOLENCE",
            width/2, height/2.5)
    }

    buttonCheck(x, y){
        return super.buttonCheck(x, y)
    }
}