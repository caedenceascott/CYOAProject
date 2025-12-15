//tattoo of death interactive storybook

//global vars
const baseWidth = 960
const baseHeight = 540
const aspect = baseWidth/baseHeight
let scaleFactor = 1

let light
let dark
let pages = []
let page 
let player

function preload(){
    player = new Player(0.9, 0.3)
}
//setup
function setup() {
    setDimensions()

    //setup stuff
    light = color(255, 220, 160)
    dark = color(0)
    frameRate(30)

    background(200)
    rectMode(CENTER)
    ellipseMode(CENTER)
    imageMode(CENTER)
    textFont('Georgia')
    textAlign(CENTER, CENTER)
    angleMode(DEGREES)
    frameRate(30)


    //pages
    pages.push(new Homepage())
    pages.push(new PageOne())
    pages.push(new PageTwo())
    pages.push(new PageThree())
    pages.push(new PageFour())
    pages.push(new PageFive())
    pages.push(new PageSix())
    pages.push(new PageSeven())
    pages.push(new PageEight())
    pages.push(new PageNine())
    pages.push(new PageTen())
    pages.push(new PageEleven())
    pages.push(new PageTwelve())
    pages.push(new PageThirteen())
    pages.push(new PageFourteen())
    pages.push(new PageFifteen())
    pages.push(new PageSixteen())
    pages.push(new PageSeventeen())
    pages.push(new PageEighteen())
    pages.push(new PageNineteen())
    pages.push(new PageTwenty())

    page = pages[0]
}

function draw(){
    //fun background color change
    dark = color((50 - (dist(mouseX, mouseY, width/2, height/2))/(width * .03)), 10, 0)
    light = color(
        (255 + dist(mouseX, mouseY, width/2, height/2)/(width * .03)), 
        (220 + dist(mouseX, mouseY, width/2, height/2)/(width * .03)), 
        (160 + dist(mouseX, mouseY, width/2, height/2)/(width * .015)))

    background(100)
    noStroke()

    page.display()
    if (page.nextPage()){
        page = pages[page.nextPage()]
        page.initPlayer()
        console.log(page, page.initPlayer)
    }
    
    //cursor change on buttons
    if(page.buttonCheck(mouseX, mouseY) || (page.continueCheck(mouseX, mouseY) && !page.active.done)){
        fill(152, 120, 100)
        circle(mouseX, mouseY, 30)
    } else {
        noFill()
        strokeWeight(3)
        stroke(152, 120, 100)
        circle(mouseX, mouseY, 30)
    }

    //console.log(page.active, page.continueCheck(mouseX, mouseY))
}


function mouseClicked(){
    //console.log(page.buttonCheck(mouseX, mouseY))

    if (page.buttonCheck(mouseX, mouseY)){
        page = pages[page.buttonCheck(mouseX, mouseY).page]
        //console.log(page, page.initPlayer)
        page.initPlayer()
    }

    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height && !page.continueCheck(mouseX, mouseY)){
        page.update()
    }

    if (page.continueCheck(mouseX, mouseY) && !page.active.done){
        page.active.continue()
        //console.log(page.continueCheck(mouseX, mouseY))
    }

    //console.log(page.active)
}


function keyPressed(){
    if (key === 'e' || key === 'E'){
        if (page.intCheck()){
            //console.log(page.intCheck()[0])
            page.intCheck()[0].triggered = true
        }
    }
}

