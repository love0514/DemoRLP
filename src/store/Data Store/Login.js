import {
    observable,
    action
} from "mobx"


class Login {
    // @observable account = ''
    // @observable password = ''

    @action.bound createElement(name) {
        if (!this[name]) {
            this[name] = ''
            return
        }
    }
}


let Logins = new Login

export default Logins


// autorun(()=>{
//     console.log(touchs.currentItem)
// })