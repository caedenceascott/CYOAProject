function windowResized(){
    setDimensions()
    background(dark)
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
