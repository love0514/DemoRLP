import { TimelineLite } from 'gsap'

class TouchAnimate {
    constructor() {
        this.translates = new TimelineLite
    }
}


let TouchAnimates = new TouchAnimate;

TouchAnimates.prototype ={
  
    animate:function(x){
        // console.log(x)
        let target = document.querySelector('.CardSliderShow')
        TouchAnimates.translates.to(target, .2, { x: x, ease: Power2.easeOut })
    }
}
export default TouchAnimates 