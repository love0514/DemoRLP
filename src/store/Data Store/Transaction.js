import {
    observable,
    computed,
    action,

} from "mobx"


class transaction {
    constructor() {

        // console.log(defaultTime.setMonth(defaultTime.getMonth()-1))
        this.Time = [{ name: "Any Time", value: new Date().setMonth(new Date().getMonth() - 99) }, { name: "Last month", value: new Date().setMonth(new Date().getMonth() - 1) }, { name: "Last 3 months", value: new Date().setMonth(new Date().getMonth() - 3) }, { name: "Select Duration", value: 99 }]

        this.Type = [{ name: "All Transaction", value: '' }, { name: "Activation", value: 'A' }, { name: "Balance", value: 'B' }, { name: "TOP UP", value: 'L' }, { name: "Redemption", value: 'P' }, { name: "Discount", value: 'O' }]
    }
    @observable Transactions = [{ time: "1533108020330", type: "A" }, { time: "1536108020330", type: "B" }, { time: "1534958020330", type: "B" }, { time: "1532848020330", type: "B" }, { time: "1537608020330", type: "L" }, { time: "1537998020330", type: "L" }, { time: "1537778020330", type: "P" }, { time: "1538018020330", type: "O" }]

    @observable filter = ''
    @observable month = "Any Time"
    @observable FromDate = Date.now()
    @observable ToDate = new Date().setMonth(new Date().getMonth() - 99)
    @action.bound formatDayTime(val) {
        if (val) {
            let date = new Date(val)
            let Y = date.getFullYear();
            let M = date.getMonth() + 1;
            let D = date.getDate();

            if (M < 10) {
                M = '0' + M;
            }
            if (D < 10) {
                D = '0' + D;
            }

            return Y + '-' + M + '-' + D;
        } else {
            return '';
        }
    }
    @computed get filters() {
        var match = new RegExp(this.filter, "i")
        var type = this.Transactions.filter(data => match.test(data.type))
        return type.filter(data => {

            let ItemTime = data.time;
            return this.FromDate >= ItemTime && ItemTime >= this.ToDate ||
                this.ToDate >= ItemTime && ItemTime >= this.FromDate
        })
    }
    @computed get SelectValue() {
        var match = new RegExp(this.filter, "i")
        // console.log(this.filter)
        var type = this.Type.filter(data => match.test(data.value))
        // if (type.length > 1) {
        //     return type[0]
        // } else {
        //     return type[0]
        // }
        return type[0]
    }
    @computed get SelectTime() {
        // var match = new RegExp(this.month, "g")
        console.log(this.month)
        var time = this.Time.filter(data => {
            // console.log(data.value)
            // console.log(this.month)
            return data.name == this.month
        })
        console.log(time)
        return time[0]
    }
}
let transactions = new transaction

export default transactions

