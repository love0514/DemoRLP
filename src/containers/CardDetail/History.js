import React from 'react'
import { inject, observer, autorun } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import HistoryItem from '../../component/HistoryDetail/History'
import DateTimePicker from 'date-time-picker';

@inject('store', 'datastore')


@observer
class History extends React.Component {

    constructor(props) {
        super(props)
        this.cards = this.props.datastore.cards
        this.alert = this.props.store.alert
        this.transaction = this.props.datastore.transaction
    }
    selectMonth(e) {
        // console.log(e.target.value)
        // let options = {
        //     lang: 'zh-CN',
        //     format: 'yyyy-MM-dd',
        // }
        // let options = document.querySelectorAll('.SortByDate option')[0]
        // console.log(options)
        // options.selected = true;
        if (e.target.value == 99) {
            let DateItem = this.transaction.Time.filter(data => data.value == e.target.value)
            this.transaction.month = DateItem[0].name
            this.alert.DatePickerAlert = true
            // var datapicker = new DateTimePicker.Date(options)
            // console.log(datapicker)
            // datapicker.on('selected', function (formatValue, now) {
            //     console.log(now)
            //     console.log(formatValue)
            // })       
        } else {
            // console.log(e.target)
            // this.month = e.target.name
            this.transaction.FromDate = Date.now()
            this.transaction.ToDate = parseInt(e.target.value)
            let DateItem = this.transaction.Time.filter(data => data.value == e.target.value)
            this.transaction.month = DateItem[0].name
        }

    }
    selectType(e) {
        this.transaction.filter = e.target.value
    }
    render() {
        let His = this.transaction.filters.map(data => {
            // console.log(data.time);
            return <HistoryItem time={data.time} type={data.type} />
        })
        let Type = this.transaction.Type.map(data => {
            return <option value={data.value}>{data.name}</option>
        })
        let Time = this.transaction.Time.map(data => {
            return <option name={data.name} value={data.value}>{data.name}</option>
        })
        // console.log(this.transaction.defaultTime.getTime())
        return (

            <div className="HistoryContent">

                <div className="HistorySortBox">
                    <div className="SortBox SortByType">
                        <span className="selectValue">{this.transaction.SelectValue.name}</span>
                        <select name="" id="" onChange={this.selectType.bind(this)}>
                            {Type}
                        </select>
                    </div>
                    <div className="SortBox SortByDate">
                        <span className="selectValue">{this.transaction.SelectTime.name}</span>
                        <input type="date" name="" id="sortDate" style={{ display: 'none' }} />
                        <select onChange={this.selectMonth.bind(this)} id="">
                            {Time}
                        </select>
                    </div>
                </div>
                <div className="HistoryList">
                    {His}
                </div>
            </div>

        )
    }
}
export default withRouter(History)