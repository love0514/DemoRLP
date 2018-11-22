import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import './Mycard.scss'
import CardAction from '../../store/actions/Cards'
import Fetch from '../../store/actions/FetchData'
@inject('datastore')
@observer
class Mycard extends React.Component {
    constructor(props) {
        super(props)
        this.fetch = new Fetch
        this.cards = this.props.datastore.cards
    }
    async componentDidMount() {
        // if (this.props.datas.BonusRate == 'NaN') {
        //     console.log('refetch')
        //     const bns = await this.fetch.GetBounsRate(this.props.datas.itemCode)

        // }
        // console.log(this.props.datas.BonusRate)
        if (this.props.datas.BonusRate == undefined) {
            const Rate = await this.fetch.GetBounsRate(this.props.datas.itemCode)
            // console.log(Rate)
            if (Rate.events[0] == undefined) {
                this.cards.ComBine[this.props.num].BonusRate = 0
            } else {
                // console.log(Rate.events[0])
                this.cards.ComBine[this.props.num].BonusRate = Rate.events[0].bonusRate
            }
        }
    }
    SelectItem() {
        CardAction.SelectItem(this.props.datas)
        this.props.history.push('/Detail')
    }
    render() {
        // console.log(store.combine[this.props.num])
        // console.log(this.props.datas)
        // console.log(this.props.datas.BonusRate)
        return (
            <div className="Mycard" onClick={this.SelectItem.bind(this)}>
                <img src={this.props.datas.imageUrl} alt="" />
                <div className="MycardDetail">
                    <div className="BalanceDetail">
                        <div className="CardBalanceTitle">Balance</div>
                        <div className="CardBalanceCurrency">$</div>
                        <div className="CardBalance">{new Intl.NumberFormat('en-US').format(this.props.datas.balance)}</div>
                    </div>
                    <div className="CountDetail">
                        <div className="CardCountTitle">Discount</div>
                        <div className="CardCountPercent">{`${parseInt(this.props.datas.BonusRate)}%`}</div>
                        {/* <div className="CardCountPercent">{this.props.datas.BonusRate}</div> */}
                    </div>
                </div>
            </div>

        )
    }
}
export default withRouter(Mycard)