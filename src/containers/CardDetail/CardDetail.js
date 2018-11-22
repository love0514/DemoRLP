import React from 'react'
import { inject, observer, autorun } from 'mobx-react';
import { TimelineLite } from 'gsap'
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import JsBarcode from 'jsbarcode'
import Card from '../../component/Mycards/Mycard'
import TextBar from '../../component/TextBar/TextBar'
import Alert from '../../component/AlertBox/AlertBox'
import Picker from '../../component/DatePicker/DatePicker'
import { Loading, LoadingAction } from '../../component/Loading/Loading'

import Fetch from '../../store/actions/FetchData'
import TextContent from './TextContent'
import CardAction from '../../store/actions/Cards'
import History from './History'
import './CardDetail.scss'
@inject('store', 'datastore')


@observer
class CardDetail extends React.Component {

    constructor(props) {
        super(props)
        this.touch = this.props.store.touch
        this.trigger = this.props.store.trigger
        this.transaction = this.props.datastore.transaction
        this.cards = this.props.datastore.cards
        this.fetch = new Fetch
        this.time = this.props.store.timer
        this.alert = this.props.store.alert
        this.timer
        this.refresh
        

    }

    async componentDidMount() {
        LoadingAction.Start('CardDetailContainer')
        document.querySelector('.DetailScroll').addEventListener('touchmove', (e) => {
            this.restoreEvent(e, 'DetailScroll');
        }, false)
        ///Load OTP

        await this.fetch.GetCardOTP(this.cards.currentItem.cardNumber)

        ///產生Barcode
        var otp
        otp = this.cards.currentItem.token == "X" ? this.cards.currentItem.otp : this.cards.currentItem.token
        await JsBarcode("#barcode", otp, {
            format: "CODE128",
            displayValue: false
        })

        //產生Timer

        this.timer = await setInterval(() => {
            // console.log('detail')
            if (this.alert.IsAlert !== true && this.alert.TextRefresh !== true) {
                if (this.time.RefreshTime > 0) {
                    this.time.RefreshTime--
                } else if (this.time.RefreshTime <= 0) {
                    if (this.trigger.DetailInfoTrigger == "info") {

                        this.time.RefreshTime = 300;
                        this.alert.IsAlert = true
                    }
                    else {
                        let resent = this
                        document.querySelector('.BarCord img').style.display = 'none'
                        document.querySelector('.BarCord p').style.display = 'none'
                        let p = document.createElement('p')
                        p.classList.add('reload')
                        p.innerHTML = "The barcode has expired, you will need to refresh here"
                        p.onclick = async function () {
                            console.log('123')
                            await resent.fetch.GetCardOTP(resent.cards.currentItem.cardNumber)
                            document.querySelector('.BarCord img').style.display = 'flex'
                            document.querySelector('.BarCord p').style.display = 'flex'
                            document.querySelector('.reload').remove()


                            resent.time.RefreshTime = 300;
                            resent.alert.TextRefresh = false
                        };
                        document.querySelector('.BarCord').appendChild(p)
                        this.alert.TextRefresh = true
                    }
                    // this.fetch.GetCardOTP(this.cards.currentItem.cardNumber)
                }
            }
        }, 1000)
        this.refresh = await setInterval(() => {
            if (this.time.ReFetch > 0) {
                this.time.ReFetch--
            } else if (this.time.ReFetch <= 0) {
                this.time.ReFetch = 10;
                CardAction.UpdateCard();
                // console.log(123)
            }
        }, 1000)
        LoadingAction.Stop('CardDetailContainer')
    }
    async componentWillUnmount() {
        this.transaction.month = "Any Time"
        this.transaction.filter = ''
        this.time.RefreshTime = 300
        this.time.ReFetch = 10
        this.trigger.DetailInfoTrigger = "info"
        await CardAction.UpdateCard()
        clearInterval(this.refresh)
        clearInterval(this.timer)
    }
    select(e) {
        this.trigger.DetailInfoTrigger = e.target.id
    }
    TopUp() {
        this.props.history.push('/Credite')
    }
    restoreEvent(ev, defaultTarget) {
        // console.log('move')
        var _target = ev.target,
            _ss = document.querySelector(`.${defaultTarget}`),
            _point = ev.touches[0],
            _top = _ss.scrollTop
        var _bottomFaVal = _ss.scrollHeight - _ss.offsetHeight;
        if (_top === 0) {
            if (_point.clientY > this.touch.touch.y1) {
                // console.log('stop')
                ev.preventDefault();
            } else {
                // console.log('move')
                if (_ss.scrollHeight > _ss.clientHeight) {
                    console.log('move')
                    ev.stopPropagation();
                }

            }
        } else if (_top === _bottomFaVal) {
            if (_point.clientY < this.touch.touch.y1) {
                console.log('stop')
                ev.preventDefault();
            } else {
                // console.log('move')
                ev.stopPropagation();
            }
        } else if (_top > 0 && _top < _bottomFaVal) {
            // console.log('move')
            ev.stopPropagation();
        }
        // }
    }

    touchstart(e) {
        let touch = e.changedTouches[0]
        this.touch.touch.x1 = touch.pageX
        this.touch.touch.y1 = touch.pageY
        this.touch.touchStartTime = Date.now()
    }
    touchend(e) {
        let touch = e.changedTouches[0]
        this.touch.touch.y2 = touch.pageY
        this.touch.touchEndTime = Date.now()
    }
    touchmove(e) {
        let touch = e.changedTouches[0]
        this.touch.touch.y2 = touch.pageY
    }
    render() {
        var infoContent, otp
        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render a completed state
                return <span>Times Out</span>;
            } else {
                // Render a countdown
                return <span>{minutes}:{seconds}</span>;
            }
        }
        if (this.trigger.DetailInfoTrigger == "info") {
            infoContent = <TextContent />
        } else {
            infoContent = <History />
        }
        otp = this.cards.currentItem.token == "X" ? this.cards.currentItem.otp : this.cards.currentItem.token
        return (
            <div className="CardDetailContainer">
                <Loading />
                <Picker WrongPage="CardDetailContainer" />
                <Alert WrongPage="CardDetailContainer" AlertText="Your payment session has expired. Please tap the Refresh button to try again." Cancel="Cancel" Confirm="Refresh" ConfirmAction={this.fetch.GetCardOTP} />
                <div className="TopUp" onClick={this.TopUp.bind(this)}>Top up</div>
                <div id="DetailScroll" className="DetailScroll" onTouchStart={this.touchstart.bind(this)} onTouchMove={this.touchmove.bind(this)} onTouchEnd={this.touchend.bind(this)}>
                    <TextBar />
                    <div className="CardItem">
                        <Card datas={this.cards.currentItem} />
                    </div>
                    <div className="BarCord">
                        <img id="barcode" src="" alt="" />
                        <p style={{ pointerEvents: "none" }}>{otp}</p>
                    </div>
                    <div className="Timer">
                        {this.time.GetMin}
                    </div>
                    <div className="CardinfoBox">
                        <div className="infoType">
                            <div className={`infoBtn ${this.trigger.DetailInfoTrigger == "info" ? '' : "infoNonActive"}`} id="info" onClick={this.select.bind(this)}>Card's info</div>
                            <div className={`infoBtn ${this.trigger.DetailInfoTrigger == "history" ? '' : "infoNonActive"}`} id="history" onClick={this.select.bind(this)} >History</div>
                        </div>
                        <div className="infoContent">
                            {infoContent}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default withRouter(CardDetail)