import {
    observable,
} from "mobx"


export default class touch {
    @observable touch = {}
    @observable touchStartTime = 0
    @observable touchEndTime = 0
    @observable currentDistance = 0
    @observable currentDistanceY = 0
    @observable totalDiff = 0
    @observable totalDiffY = 0
    @observable currentItem = 0
}


var touchs = window.touchs = new touch


// autorun(()=>{
//     console.log(touchs.currentItem)
// })