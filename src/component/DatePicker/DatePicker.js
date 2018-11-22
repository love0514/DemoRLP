import React from 'react'
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { TimelineLite } from 'gsap'
import initReactFastclick from 'react-fastclick';
import { FormattedMessage } from 'react-intl'
import Route from '../../store/actions/Route'

import './DatePicker.scss'
@inject('store', 'datastore')
@observer

class DatePicker extends React.Component {
    constructor(props) {
        super(props)
        this.alert = this.props.store.alert
        this.picker = new TimelineLite
        this.cards = this.props.datastore.cards
        this.transaction = this.props.datastore.transaction
        this.datepicker = this.props.store.datepicker
        // console.log(this.transaction.formatDayTime(1520208000000))
        // console.log(this.transaction.month)
    }
    componentDidMount() {
        initReactFastclick();
        document.querySelector('.DatePickerContainer').addEventListener('touchmove', function (e) {
            e.preventDefault();
        })
        this.picker.pause().set(`${this.props.WrongPage}`, { zIndex: -1 })
            .set('.DatePickerContainer', { zIndex: 10 })
            .set((`.DatePickerContainer>.DatePickerContent`), { x: "0%", zIndex: 5 })
            .set('.DatePickerContainer>.wrong_cover', { x: "0%", y: "-50", opacity: .5, zIndex: 1 })
    }
    componentDidUpdate() {
        if (this.alert.DatePickerAlert == true) {
            this.picker.play()
        }
    }
    ChangeDate(e) {
        console.log(e.target)

        this.datepicker[e.target.name] = new Date(e.target.value).getTime()
        // console.log(e.target.value)
    }
    async  confirm() {
        await this.picker.reverse()
        this.transaction.FromDate = this.datepicker.FromDate
        this.transaction.ToDate = this.datepicker.ToDate

        this.alert.DatePickerAlert = false
        // this.datepicker.FromDate = Date.now()
        // this.datepicker.ToDate = new Date().setDate(new Date().getDate() - 14)
        // console.log(this.transaction.FromDate)
        // console.log(this.transaction.ToDate)
        // this.transaction.FromDate
    }
    async  Cancel() {
        await this.picker.reverse()
        this.alert.DatePickerAlert = false
        // Route.Pre(this.props)

    }
    
    render() {
        // console.log(this.transaction)
        return (
            <div className="DatePickerContainer" value={this.alert.DatePickerAlert}>
                <div className="coverbg wrong_cover"></div>
                <div className="DatePickerContent">
                    <div className="PickerText">Select Duration</div>
                    <div className="DateArea">
                        <input max={this.transaction.formatDayTime(Date.now())} name="FromDate" type="date" value={this.transaction.formatDayTime(this.datepicker.FromDate)} onChange={this.ChangeDate.bind(this)} />
                        ~
                        <input name="ToDate" type="date" value={this.transaction.formatDayTime(this.datepicker.ToDate)} onChange={this.ChangeDate.bind(this)} />
                    </div>
                    <div className="DateBtns">
                        <div className="Btn cancel" onClick={this.Cancel.bind(this)} >Cancel</div>
                        <div className="Btn confirm" onClick={this.confirm.bind(this)}>OK</div>
                        {/* <div className="Btn cancel" onClick={this.Cancel.bind(this)} >{this.props.Cancel}</div>
                        <div className="Btn confirm" onClick={this.Confirm.bind(this)}>{this.props.Confirm}</div> */}
                    </div>
                </div>
            </div >
        )
    }
}
export default withRouter(DatePicker)