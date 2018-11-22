import {
    observable,
} from "mobx"


export default class trigger {
    @observable SearchTrigger = true
    @observable DetailInfoTrigger = 'info'
}




// autorun(()=>{
//     console.log(touchs.currentItem)
// })