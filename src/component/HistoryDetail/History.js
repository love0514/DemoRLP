import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { FormattedDate, FormattedTime } from 'react-intl'
import './History.scss'
import Fetch from '../../store/actions/FetchData'
@inject('datastore')
@observer
class History extends React.Component {
    constructor(props) {
        super(props)
        this.transaction = this.props.datastore.transaction
    }
    render() {
        // console.log(store.combine[this.props.num])
        // console.log(this.transaction.Type)
        const type = this.transaction.Type.filter(data => data.value == this.props.type)
        // console.log(type)
        return (
            <div className="HistoryItem">
                <div className="HistoryItemContent">
                    <div className="HistoryDetail">
                        <div className="store">LINE GIFT CARD</div>
                        <div className="transationAmount">{type[0].name} -5 $ US</div>
                        <div className="transationDate"><FormattedDate value={parseInt(this.props.time)} />  <FormattedTime value={parseInt(this.props.time)} /></div>
                    </div>
                    <div className="HistoryState">
                        <div className="transationNum">Ref No.:123456880-</div>
                        <div className="transationState">CONFIRM</div>
                    </div>
                </div>
            </div>

        )
    }
}
export default withRouter(History)