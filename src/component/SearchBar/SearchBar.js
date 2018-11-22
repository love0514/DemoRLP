import React from 'react'
import { inject, observer } from 'mobx-react';
import { TimelineLite } from 'gsap'
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import './SearchBar.scss'
import Route from '../../store/actions/Route'
@inject('store', 'datastore')
@observer

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.triggerBox = new TimelineLite
        this.trigger = this.props.store.trigger
        this.cards = this.props.datastore.cards

        // console.log(this.props.store.trigger.SearchTrigger)
    }
    SearchBox() {
        console.log(this.trigger.SearchTrigger)
        if (this.trigger.SearchTrigger) {
            this.triggerBox.play()
            this.trigger.SearchTrigger = false
        } else {
            this.triggerBox.reverse()
            this.trigger.SearchTrigger = true
        }
    }
    componentDidMount() {
        ////搜尋按鈕動畫
        let Box = document.querySelector('.SearchBox')
        let SearchBtn = document.querySelector('.SearchIconAfter')
        let SearchMove = document.querySelector('.SearchIcon')
        let SearchIconBefore = document.querySelector
            ('.SearchIconBefore')
        this.triggerBox.pause().to(Box, .4, { width: "100%", opacity: 1 }).to(SearchBtn, 0, { opacity: 0, pointerEvents: "none" }, "-=.4").to(SearchMove, .4, { opacity: 1 }, "-=.4").to(SearchIconBefore, .2, { opacity: 0 }, "-=.4")

    }
    SearchFilter(e) {

        // this.cards.VisibleItem = 4
        this.cards.filter = e.target.value
        // console.log(this.cards.filters.length)
        this.cards.filters.length < 6 ? this.cards.VisibleItem = this.cards.filters.length : this.cards.VisibleItem = 6
    }
    Back() {
        Route.Pre(this.props)
    }
    render() {
        var Icon
        if (this.props.icon == "Home") {
            Icon = <div className="SearchIconBefore" style={{ background: `url(/images/ogloba/icons/ico_24_home.png) 0 0 no-repeat`, backgroundSize: 'contain' }} onClick={this.Back.bind(this)}></div>
        } else {
            Icon = <div className="SearchIconBefore"></div>
        }
        return (
            <div className="SearchContainer">
                {Icon}
                <div className="SearchTitle">{this.props.title}</div>
                <div className="SearchBox">
                    <input type="text" className="search" Placeholder="Keywords" value={this.cards.filter} onChange={this.SearchFilter.bind(this)}></input>
                    <div className="SearchIcon"></div>
                    <div className="SearchInputCancle" onClick={this.SearchBox.bind(this)}></div>
                </div>
                <div className="SearchIconAfter" onClick={this.SearchBox.bind(this)}></div>
            </div>
        )
    }
}
export default withRouter(SearchBar)