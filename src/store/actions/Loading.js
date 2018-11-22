import {
    autorun,
    action
} from "mobx"


class Loading {
    // constructor() {
    //     this.fetch = new Fetch
    // }
    @action.bound Start(page = 'container') {
        document.querySelector(`.${page}`).style.pointerEvents = "none"
        document.querySelector('.lds-spinner').style.opacity = 1
    }
    @action.bound Stop(page = 'container') {
        document.querySelector(`.${page}`).style.pointerEvents = "auto"
        document.querySelector('.lds-spinner').style.opacity = 0
    }
}
let Data = new Loading

export default Data


