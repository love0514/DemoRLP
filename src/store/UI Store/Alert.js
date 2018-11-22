import {
    observable,
    computed
} from "mobx"
import DatePicker from "./DatePicker";


export default class Alert {
    @observable IsAlert = false
    @observable DatePickerAlert = false
    @observable TextAlert = false
    @observable TextRefresh =false
}

