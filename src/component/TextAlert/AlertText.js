import React from 'react'
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { TimelineLite } from 'gsap'
import { FormattedMessage } from 'react-intl'


import './AlertText.scss'
@inject('store', 'datastore')
@observer

class AlertText extends React.Component {
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
        if (this.alert.TextAlert == true) {
            this.wrong.play()
        }
    }
    async  Cancel() {
        await this.wrong.reverse()
        this.alert.TextAlert = false
        // Route.Pre(this.props)

    }

    render() {
        return (
            <div className="AlertContainer" value={this.alert.TextAlert}>
                <div className="coverbg wrong_cover"></div>
                <div className="AlertContent">
                    {/* <div className="text">Your payment session has expired. Please tap the Refresh button to try again.</div> */}
                    <div className="text">{this.props.AlertText}</div>
                    <div className="AlertBtns">
                        {/* <div className="Btn cancel" >Cancel</div>
                        <div className="Btn confirm">Refresh</div> */}
                        <div className="Btn cancel" onClick={this.Cancel.bind(this)} >{this.props.Cancel}</div>
                    </div>

                </div>
            </div >
        )
    }
}
export default withRouter(AlertText)