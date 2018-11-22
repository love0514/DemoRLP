import React from 'react'
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Cards from '../../component/Mycards/MycardS'
import CardAction from '../../store/actions/Cards'
import SearchBar from '../../component/SearchBar/SearchBar'
import Fetch from '../../store/actions/FetchData'
import './AllCard.scss'
@inject('store', 'datastore')
@observer

class AllCard extends React.Component {
    constructor(props) {
        super(props)
        this.cards = this.props.datastore.cards
        this.fetch = new Fetch
        // console.log(this.props.store.trigger.SearchTrigger)
    }
    async componentDidMount() {
        document.querySelector('.AllCardContent').addEventListener('touchmove', function (e) {
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
        }),loadmore
        var nocards = cards.length == 0 && <p className="noCard">No Cards</p>
        // if (this.cards.filters.length !== this.cards.AllCardsItem) {
        //     loadmore = <div className="LoadMore" onClick={this.LoadMore.bind(this)}><u>Load More cards</u></div>
        // }
        return (
            <div className="AllCardContainer">
                <SearchBar icon="Home" title="All Cards" />
                <div className="SortBy">
                    <div className="SortBtn"onClick={CardAction.Sort.bind(this,'lastTransactionTime')} >Last used</div>
                    <div className="SortBtn" onClick={CardAction.Sort.bind(this,'balance')}>Balance</div>
                </div>
                <div className="AllCardContent">
                    {cards}
                    {nocards}
                    {/* {loadmore} */}
                </div>
            </div>
        )
    }
}
export default withRouter(AllCard)