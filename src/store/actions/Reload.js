import {
    autorun,
    action
} from "mobx"
import Datas from '../Data Store/Reload'

class Reload {

    @action.bound async ReloadChange(e) {
        //    console.log(e.target.value.replace(/[^\d]/g, ''))
        if (e.target.value.replace(/[^\d]/g, '') !== '') {
            Datas.ReloadAmount = parseInt(e.target.value.replace(/[^\d]/g, '')) <= 49999 ? parseInt(e.target.value.replace(/[^\d]/g, '')) : 49999

        } else {
            Datas.ReloadAmount = ''
        }
    }
    @action.bound async Cancel() {
        Datas.ReloadAmount = ''
    }
    @action.bound async AddAmount(e) {
        if (Datas.ReloadAmount !== '') {
            if (Datas.ReloadAmount + parseInt(e.target.dataset.num) <= 49999) {
                Datas.ReloadAmount += parseInt(e.target.dataset.num)
            } else {
                Datas.ReloadAmount = 49999
            }
        } else {
            Datas.ReloadAmount = 0 + parseInt(e.target.dataset.num)
        }

    }
}
let Data = new Reload

export default Data


