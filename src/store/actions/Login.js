import {
    autorun,
    action
} from "mobx"

import LoginAction from '../Data Store/Login'

class Login {

    @action.bound InputChange(e) {
        if (LoginAction[e.target.name] != undefined) {
            LoginAction[e.target.name] = parseInt(e.target.value.replace(/[^\d]/g, ''))
        } else {
            LoginAction.createElement(e.target.name)
            LoginAction[e.target.name] = parseInt(e.target.value.replace(/[^\d]/g, ''))
        }
    }
}
let Logins = new Login

export default Logins


