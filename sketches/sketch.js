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
let bigGuyEnd
let callEnd
let censoredEnd

function preload(){
    bigGuyEnd = new BigGuyImage()
    callEnd = new CallImage()
    censoredEnd = new CensoredImage()
}

//setup
function setup() {
    setDimensions()

    //setup stuff
    light = color(255, 220, 160)
    dark = color(0)
    frameRate(24)

    background(0)
    rectMode(CENTER)
    imageMode(CENTER)
    textFont('Georgia')
    textAlign(CENTER, CENTER)

    //pages
    pages.push(new Homepage())
    //start
    pages.push(new StartOne())
    pages.push(new StartTwo())
    pages.push(new StartThree())
    pages.push(new StartFour())
    pages.push(new StartFive())
    pages.push(new JapanOne())
    pages.push(new JapanTwo())
    pages.push(new Yakuza())
    pages.push(new Ignore())
    pages.push(new LasersOne())
    pages.push(new LasersTwo())
    pages.push(new LasersThree())
    pages.push(new LasersFour())
    pages.push(new HideOne())
    pages.push(new HideTwo())
    pages.push(new Escape())
    pages.push(new RunOne())
    pages.push(new RunTwo())
    pages.push(new RunThree())
    pages.push(new Warn())
    pages.push(new Stay())
    pages.push(new Anaconda())
    pages.push(bigGuyEnd)
    pages.push(callEnd)
    pages.push(censoredEnd)

    page = pages[0]

    noStroke()
    fill(dark)
    rect(width/2, height/2, width, height, height/4)
}

function windowResized(){
    setDimensions()
}

function updateDimensions(){
    if(windowWidth / windowHeight > aspect){
        return {
            canvasWidth: windowHeight * aspect,
            canvasHeight: windowHeight
        }
    }
    return {
        canvasWidth: windowWidth,
        canvasHeight: windowWidth / aspect
    }
}

function setDimensions(){
    //canvas resizing shenanigans
    const {canvasWidth, canvasHeight} = updateDimensions()
    const myCanvas = createCanvas(canvasWidth, canvasHeight)
    scaleFactor = baseWidth/canvasWidth
    const x = (windowWidth - canvasWidth)/2
    const y = (windowHeight - canvasHeight)/2
    myCanvas.position(x, y)
    pixelDensity(window.devicePixelRatio)
}

function draw(){
    updateVis()
}

function updateVis(){
    dark = color((50 - (dist(mouseX, mouseY, width/2, height/2))/17), 10, 0)
    light = color(
        (255 + dist(mouseX, mouseY, width/2, height/2)/15), 
        (220 + dist(mouseX, mouseY, width/2, height/2)/15), 
        (160 + dist(mouseX, mouseY, width/2, height/2)/7))

    background(255)
    noStroke()
    fill(dark)
    rect(width/2, height/2, width, height, height/4)

    page.display()
    
    if(page.buttonCheck(mouseX, mouseY)){
        fill(152, 120, 100)
        circle(mouseX, mouseY, 30)
    } else {
        noFill()
        strokeWeight(3)
        stroke(152, 120, 100)
        circle(mouseX, mouseY, 30)
    }

    //console.log(page)
    
}

function mouseClicked(){
    //console.log(page.buttonCheck(mouseX, mouseY))

    if (page.buttonCheck(mouseX, mouseY)){
        page = pages[page.buttonCheck(mouseX, mouseY).page]
    }
}