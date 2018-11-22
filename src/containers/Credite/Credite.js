import React from 'react'
import { inject, observer, autorun } from 'mobx-react';
import { TimelineLite } from 'gsap'
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Route from '../../store/actions/Route'
import CrediteBtn from '../../component/Credite/CrediteBtn'
import Fetch from '../../store/actions/FetchData'
import ReloadAction from '../../store/actions/Reload'
import AlertText from '../../component/TextAlert/AlertText'
import './Credite.scss'
@inject('store', 'datastore')


@observer
class Credite extends React.Component {

    constructor(props) {
        super(props)
        this.cards = this.props.datastore.cards
        this.reload = this.props.datastore.reload
        this.alert =this.props.store.alert
        // this.touchs = this.props.store.touch
        // this.trigger = this.props.store.trigger
        // this.cards = this.props.datastore.cards
        // this.fetch = new Fetch

    }
    componentDidMount() {
        // document.querySelector('.CardDetailContainer').addEventListener('touchmove', function (e) {
        //     e.stopPropagation();
        // }, false)
    }

    componentWillUnmount() {
        this.reload.ReloadAmount = 0
    }
    test() {
        Route.Pre(this.props)
    }
    PayStore(){
        if(this.reload.ReloadAmount<100){
            this.alert.TextAlert=true
        }
    }
    render() {
        let btn = this.reload.ReloadAmount < 100 ? { background: "#888888" } : { background: "#00C43e" }
        return (
            <div className="CrediteContainer">
            <AlertText WrongPage="CrediteContainer" AlertText="The minimum top up amount  is 100 THB" Cancel="OK"/>
                <p onClick={this.test.bind(this)}>back</p>
                <div className="CrediteBtnBox">
                    <CrediteBtn num="100" />
                    <CrediteBtn num="200" />
                    <CrediteBtn num="500" />
                    <CrediteBtn num="1000" />
                    <CrediteBtn num="2000" />
                    <CrediteBtn num="5000" />
                </div>
                <div className="ValueTitle">Your Top up value</div>
                <div className="CrediteInput">
                    <div className="currency">$</div>
                    <div className="Input"><input type="tel" value={this.reload.ReloadAmount} onChange={ReloadAction.ReloadChange.bind(this)} /></div>
                    <div className="cancle" onClick={ReloadAction.Cancel.bind(this)}>
                        <img src="/images/ogloba/icons/ico_16_close.png" alt="" />
                    </div>
                </div>
                <div className="CrediteDetail">
                    <div className="DetailItem TopUpvalue">
                        <div className="textbox">
                            <div className="ValueText">Top up value</div>
                            <div className="ValueAmount">{this.reload.ReloadAmount == '' ? 0 : this.reload.ReloadAmount}</div>
                        </div>
                        <p className="currency">$</p>
                    </div>
                    <div className="DetailItem Discount">
                        <div className="textbox">
                            <div className="DiscountText">Discount</div>
                            <div className="DiscountAmount">{(this.reload.ReloadAmount * this.cards.currentItem.BonusRate / 100) == 0 ? 0 : -(this.reload.ReloadAmount * this.cards.currentItem.BonusRate / 100)}</div>
                        </div>
                        <p className="currency">$</p>
                    </div>
                    <div className="DetailItem Total">
                        <div className="textbox Total">
                            <div className="TotalText">Total payment</div>
                            <div className="TotalAmount">{this.reload.ReloadAmount * (100 - this.cards.currentItem.BonusRate) / 100}</div>
                        </div>
                        <p className="currency">$</p>
                    </div>
                </div>
                <div className="PayBtn" style={btn} onClick={this.PayStore.bind(this)}>
                    <div className="PayBox">
                        <div className="PayLogo">
                            <img src="/images/ogloba/icons/logo_RLP_128x23_white.png" alt="" />
                        </div>
                        <div className="PayAmount">
                            {`PAY ${this.reload.ReloadAmount * (100 - this.cards.currentItem.BonusRate) / 100} $`}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Credite)