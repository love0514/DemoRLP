import {
    autorun,
    action
} from "mobx"
// import Datas from '../Data Store/Reload'
import Fetch from '../../store/actions/FetchData'
class Alert {
    constructor() {
        this.fetch = new Fetch
    }
    @action.bound RefreshConfirm() {
        
    }
}
let Data = new Alert

export default Data


