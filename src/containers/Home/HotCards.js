import React from 'react'
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Cards from '../../component/Mycards/MycardS'

import SearchBar from '../../component/SearchBar/SearchBar'
import Fetch from '../../store/actions/FetchData'
@inject('store', 'datastore')
@observer

class HotCards extends React.Component {
    constructor(props) {
        super(props)
        this.cards = this.props.datastore.cards
        this.touch = this.props.store.touch
        this.fetch = new Fetch
        // console.log(this.props.store.trigger.SearchTrigger)
    }

    async componentDidMount() {
        let resent = this
        document.querySelector('.HotCardContainer').addEventListener('touchmove', function (e) {
            resent.restoreEvent(e, 'ScrollBlock');
            // e.stopPropagation()
        }, false)
        ///Load Product
        this.fetch.GetHotCard()
        this.fetch.GetProductByCategory()
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
                    // console.log('move')
                    ev.stopPropagation();
                }

            }
        } else if (_top === _bottomFaVal) {
            if (_point.clientY < this.touch.touch.y1) {
                // console.log('stop')
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
    LoadMore() {
        this.cards.VisibleItem += 2
    }
    componentWillUnmount() {
        this.cards.filter = ''
        this.cards.VisibleItem = this.cards.defaultVisibleItem
    }
    render() {

        var cards = this.cards.visiblePD.map((data, index) => {
            return <Cards key={index} datas={data} num={index} />
        }), loadmore
        var nocards = cards.length == 0 && <p className="noCard">No Cards</p>
        // console.log(cards)
        if (this.cards.filters.length !== this.cards.VisibleItem) {
            loadmore = <div className="LoadMore" onClick={this.LoadMore.bind(this)}><u>Load More cards</u></div>
        }
        return (
            <div id="HotCardContainer" className="HotCardContainer" onTouchStart={this.touchstart.bind(this)} onTouchMove={this.touchmove.bind(this)} onTouchEnd={this.touchend.bind(this)}>
                <SearchBar title="Hot Cards" />
                <div className="HotCardsContent" >
                    {cards}
                    {nocards}
                    {loadmore}
                </div>
            </div>
        )
    }
}
export default withRouter(HotCards)