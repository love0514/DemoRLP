import {
    observable,
    computed
} from "mobx"


class Reload {
    @observable ReloadAmount =0
    @observable ReloadDiscount = 0
 
}
let Data = new Reload

export default Data
