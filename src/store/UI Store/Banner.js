import {
    observable,
} from "mobx"


export default class Banner {
    @observable advertisments = {}
    @observable currentDistance = 0
    @observable totalDiff = 0
    @observable totalDiffY = 0
    @observable currentItem = 0
}





// autorun(()=>{
//     console.log(touchs.currentItem)
// })