import {
    observable, computed,
} from "mobx"


export default class Timer {
    @observable RefreshTime = 300
    @observable ReFetch = 10
    @computed get GetMin() {
        const Min = parseInt(this.RefreshTime / 60)
        const Sec = this.RefreshTime % 60
        var Secs = (Array(2).join("0") + Sec).slice(-2)

        return `${Min} : ${Secs}`
    }
}





// autorun(()=>{
//     console.log(touchs.currentItem)
// })