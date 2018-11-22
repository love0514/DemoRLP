import React from 'react'
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Cards from '../../component/Mycards/MycardS'
import CardAction from '../../store/actions/Cards'
import SearchBar from '../../component/SearchBar/SearchBar'
import Fetch from '../../store/actions/FetchData'
import './HotCard.scss'
@inject('store', 'datastore')
@observer

class HotCard extends React.Component {
    constructor(props) {
        super(props)
        this.cards = this.props.datastore.cards
        this.fetch = new Fetch
        // console.log(this.props.store.trigger.SearchTrigger)
    }
    async componentDidMount() {
        document.querySelector('.HotCardContainer').addEventListener('touchmove', function (e) {
            e.stopPropagation();
        }, false)

        ///Load Product
        // await this.fetch.GetProduct()
        // await this.fetch.GetCards()
        // await CardAction.combine()  
    }
    render() {

        var cards = this.cards.filters.map((data, index) => {
            return <Cards key={index} datas={data} />
        })
        return (
            <div className="HotCardContainer">
                <SearchBar icon="Home" />
                <div className="SortBy">
                    <div className="SortBtn"onClick={CardAction.Sort.bind(this,'lastTransactionTime')} >Last used</div>
                    <div className="SortBtn" onClick={CardAction.Sort.bind(this,'balance')}>Balance</div>
                </div>
                <div className="HotCardContent">
                    {cards}
                    <div className="LoadMore"><u>Load More cards</u></div>
                </div>
            </div>
        )
    }
}
export default withRouter(HotCard)