class Player {
    constructor(x, y){
      //general vars
      this.x = x
      this.y = y
      this.xSpeed = 0
      this.ySpeed = 0
      this.goX
      this.goY
      this.angle = 0
      this.state = 0

      //states
      this.sprite = [
        loadImage('media/standDown.png'), //0
        loadImage('media/walkDown.gif'), //1
        loadImage('media/standUp.png'), //2
        loadImage('media/walkUp.gif'), //3
        loadImage('media/standLeft.png'), //4
        loadImage('media/walkLeft.gif'), //5
        loadImage('media/standRight.png'), //6
        loadImage('media/walkRight.gif'), //7
        loadImage('media/walkNE.gif'), //8
        loadImage('media/walkNW.gif'), //9
        loadImage('media/walkSW.gif'), //10
        loadImage('media/walkSE.gif'), //11
      ]
    }
    
    display(){
      //if stationary
      if (this.xSpeed === 0 && this.ySpeed === 0){
        if(this.angle >= 45 && this.angle < 135){
            this.state = 2
        } else if ((this.angle >= 135 && this.angle <= 180) || (this.angle >= -180 && this.angle < -135)){
            this.state = 6
        } else if (this.angle >= -45 && this.angle < 45){
            this.state = 4
        } else {
            this.state = 0
        }

        //else moving
      } else {
        if(this.angle >= 66.7 && this.angle < 111.7){
            this.state = 3
          } else if (this.angle >= 111.7 && this.angle < 156.7){
            this.state = 8
          } else if ((this.angle >= 156.7 && this.angle <= 180) || (this.angle >= -180 && this.angle < -156.7)){
            this.state = 7
          } else if (this.angle >= -156.7 && this.angle < -111.7){
            this.state = 11
          } else if (this.angle >= -111.7 && this.angle < -66.7){
            this.state = 1
          } else if (this.angle >= -66.7 && this.angle < -21.7){
            this.state = 10
          } else if (this.angle >= -21.7 && this.angle < 21.7){
            this.state = 5
          } else if (this.angle >= 21.7 && this.angle < 166.7){
            this.state = 9
          }
      }

      image(this.sprite[this.state], this.x * width, this.y * width, width/10, width/10)
    }
    
    move(){
      this.x -= this.xSpeed
      this.y -= this.ySpeed
      
      //check location and stop
      if(this.xSpeed > 0 && this.x < this.goX){
        this.xSpeed = 0
      }
      
      if(this.xSpeed < 0 && this.x > this.goX){
        this.xSpeed = 0
      }
      
      if(this.ySpeed > 0 && this.y < this.goY){
        this.ySpeed = 0
      }
      
      if(this.ySpeed < 0 && this.y > this.goY){
        this.ySpeed = 0
      }
    }
    
    update(x, y){
      //set coords to go to
      this.goX = x/width
      this.goY = y/width
  
      let xD = this.x - this.goX
      let yD = this.y - this.goY
      
      this.angle = atan2(yD, xD)
      //console.log('angle:', this.angle)
      this.xSpeed = (cos(this.angle)*7)/width
      this.ySpeed = (sin(this.angle)*7)/width
      
      //console.log('go', this.goX, this.goY)
      //console.log(this.xSpeed, this.ySpeed)
      
    }
  }