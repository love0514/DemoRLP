import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import ReloadAction from '../../store/actions/Reload'
import './CrediteBtn.scss'
// import Fetch from '../../store/actions/FetchData'
@inject('datastore')
@observer
class CrediteBtn extends React.Component {
    constructor(props) {
        super(props)
        this.cards = this.props.datastore.cards
    }
    render() {
        // console.log(store.combine[this.props.num])
        // console.log(this.props.datas)
        return (
            <div className="CrediteBtn" data-num={this.props.num} data-bonus={this.props.num * this.cards.currentItem.BonusRate / 100} onClick={ReloadAction.AddAmount.bind(this)}>
                <div className="balance" >
                    <p>+{this.props.num} <span className="currency">$</span></p>
                </div>
                <div className="discount">
                    <div className="discountTitle">Discount</div>
                    <div className="discountAmount">{(this.props.num * this.cards.currentItem.BonusRate / 100) == 0 ? 0 : -(this.props.num * this.cards.currentItem.BonusRate / 100)}<span className="currency"> $</span></div>
                </div>
            </div>

        )
    }
}
export default withRouter(CrediteBtn)