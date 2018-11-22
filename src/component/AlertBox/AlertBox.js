import React from 'react'
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { TimelineLite } from 'gsap'
import { FormattedMessage } from 'react-intl'
import Route from '../../store/actions/Route'

import './AlertBox.scss'
@inject('store', 'datastore')
@observer

class AlertBox extends React.Component {
    constructor(props) {
        super(props)
        this.alert = this.props.store.alert
        this.wrong = new TimelineLite
        this.cards = this.props.datastore.cards
    }
    componentDidMount() {

        this.wrong.pause().set(`${this.props.WrongPage}`, { zIndex: -1 })
            .set('.AlertContainer', { zIndex: 10 })
            .set((`.AlertContainer>.AlertContent`), { x: "0%", zIndex: 5 })
            .set('.AlertContainer>.wrong_cover', { x: "0%", y: "-50", opacity: .5, zIndex: 1 })
    }
    componentDidUpdate() {
        // console.log(this)
        if (this.alert.IsAlert == true) {
            this.wrong.play()
        }
    }
    async  Cancel() {
        await this.wrong.reverse()
        this.alert.IsAlert = false
        Route.Pre(this.props)

    }

    async Confirm() {

        await this.wrong.reverse();
        await this.props.ConfirmAction(this.cards.currentItem.cardNumber);
        this.alert.IsAlert = false
    }
    render() {
        return (
            <div className="AlertContainer" value={this.alert.IsAlert}>
                <div className="coverbg wrong_cover"></div>
                <div className="AlertContent">
                    {/* <div className="text">Your payment session has expired. Please tap the Refresh button to try again.</div> */}
                    <div className="text">{this.props.AlertText}</div>
                    <div className="AlertBtns">
                        {/* <div className="Btn cancel" >Cancel</div>
                        <div className="Btn confirm">Refresh</div> */}
                        <div className="Btn cancel" onClick={this.Cancel.bind(this)} >{this.props.Cancel}</div>
                        <div className="Btn confirm" onClick={this.Confirm.bind(this)}>{this.props.Confirm}</div>
                    </div>

                </div>
            </div >
        )
    }
}
export default withRouter(AlertBox)