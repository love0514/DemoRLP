import {
    observable,
    computed
} from "mobx"


export default class DatePicker {
    @observable FromDate = Date.now()
    @observable ToDate = new Date().setDate(new Date().getDate() - 14)
}

