import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import CardAction from '../../store/actions/Cards'
import { reaction, autorun } from 'mobx'
import initReactFastclick from 'react-fastclick';
import './MycardS.scss'
import Fetch from '../../store/actions/FetchData'

@inject('store', 'datastore')
@observer
class Mycard extends React.Component {
    constructor(props) {
        super(props)
        this.touch = this.props.store.touch
        this.fetch = new Fetch
        this.cards = this.props.datastore.cards
        // this.BonusRate = 2
    }
    SelectItem() {
        if (this.touch.touchEndTime - this.touch.touchStartTime < 150 && Math.abs(this.touch.touch.y2 - this.touch.touch.y1) < 30) {
            CardAction.SelectItem(this.props.datas)
            this.props.history.push('/Detail')
        }
    }
    async  componentDidMount() {
        initReactFastclick()
        // console.log(this.props.datas.BonusRate)
        if (this.props.datas.BonusRate == undefined) {
            // console.log('fetch')

            const Rate = await this.fetch.GetBounsRate(this.props.datas.itemCode)
            // console.log(Rate)
            if (Rate.events[0] == undefined) {
                this.cards.ComBine[this.props.datas.pdcode].BonusRate = 0
            } else {
                // console.log(Rate.events[0])
                this.cards.ComBine[this.props.datas.pdcode].BonusRate = Rate.events[0].bonusRate
            }
        }
    }
    async componentDidUpdate() {
        // console.log(this.props.datas.BonusRate)
        if (this.props.datas.BonusRate == undefined) {
            // console.log(this.props.num)

            const Rate = await this.fetch.GetBounsRate(this.props.datas.itemCode)
            // console.log(Rate)
            if (Rate.events[0] == undefined) {
                this.cards.ComBine[this.props.datas.pdcode].BonusRate = 0
            } else {
                // console.log(Rate.events[0])
                this.cards.ComBine[this.props.datas.pdcode].BonusRate = Rate.events[0].bonusRate
            }
        }
    }
    touchstart(e) {

        let touch = e.changedTouches[0]
        this.touch.touch.y1 = touch.pageY
        this.touch.touchStartTime = Date.now()
    }
    touchend(e) {

        let touch = e.changedTouches[0]
        this.touch.touch.y2 = touch.pageY
        this.touch.touchEndTime = Date.now()
    }
    render() {
        // console.log('123')
        // reaction(() => this.props.datas.map(card => card.BonusRate), (item, index) => {
        //     console.log(item.BonusRate)
        //  })
        // var g
        // autorun(() => {
        //     if (this.props.datas.BonusRate) {
        //         g = this.props.datas.BonusRate
        //     }
        //     // return this.BonusRate = 
        //     // console.log(BonusRate)
        // })
        // console.log("RAte")
        return (
            <div className="MycardS" onTouchStart={this.touchstart.bind(this)} onTouchEnd={this.touchend.bind(this)} onClick={this.SelectItem.bind(this)}>
                <img src={this.props.datas.imageUrl} alt="" />
                <div className="MycardDetail">
                    <div className="CountDetail">
                        <div className="CardCountPercent">{typeof (this.props.datas.BonusRate) == "number" && `${this.props.datas.BonusRate}%`}</div>
                        {/* <div className="CardCountPercent">{this.props.datas.BonusRate}</div> */}
                    </div>
                </div>
            </div>

        )
    }
}
export default withRouter(Mycard)