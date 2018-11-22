import React from 'react'
import { inject, observer, autorun } from 'mobx-react';
// import { reaction } from 'mobx'
import { TimelineLite } from 'gsap'
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
// import Loadable from 'react-loadable';
// import asyncComponent from '../../component/asyncComponent'
import Card from '../../component/Mycards/Mycard'
import CardAction from '../../store/actions/Cards'
import FavoriteAction from '../../store/actions/Favorite'
import Route from '../../store/actions/Route'
import Dot from '../../component/Mycards/Dots'
import Fetch from '../../store/actions/FetchData'
import { LoadingAction } from '../../component/Loading/Loading'
// import Animates from '../../animate/touch'
// const asyncCard = asyncComponent(() => import('../../component/Mycards/Mycard'))
@inject('store', 'datastore')


@observer
class CardSlider extends React.Component {

    constructor(props) {
        super(props)
        this.touchs = this.props.store.touch
        this.cards = this.props.datastore.cards
        this.fetch = new Fetch

    }
    async componentDidMount() {
        // document.querySelector('.CardSliderContainer').addEventListener('touchmove', function (e) {
        //     e.stopPropagation();

        // }, false)
        // console.log(this.fetch.GetProduct())
   
        // Fetch.GetProduct
        ///Load Cards
        
        // console.log(this.cards.ComBine)
        LoadingAction.Start('homepage_container')
        if (this.cards.ComBine.length == 0) {
            // this.fetch.AutoRigster()
            const pd = await this.fetch.GetProduct()
            const gc = await this.fetch.GetCards()
            await this.fetch.Test()
            if (pd && gc) {
                // console.log('123')
                await CardAction.combine()

                this.cards.UsedItem = this.cards.filters.slice(0, 6);
            }
        }
        await FavoriteAction.Favorite()
        // console.log('cardslide')
        LoadingAction.Stop('homepage_container')
        let tl = new TimelineLite
        let target = document.querySelector('.CardSliderShow')
        let maxMoveDistance = window.innerWidth * .8 - window.innerWidth * .014275
        let movement = (this.touchs.currentItem * maxMoveDistance)
        tl.set(target, { x: -movement })

    }
    translate(x, type) {
        let target = document.querySelector('.CardSliderShow')
        let tl = new TimelineLite
        if (type = "end") {
            tl.to(target, 0.3, { x: x, ease: Power2.easeOut })
        } else {
            tl.to(target, 0.1, { x: x, ease: Power2.easeOut })
        }

    }
    touchstart(e) {
        // console.log('123')
        let touch = e.changedTouches[0]
        this.touchs.touch.x1 = touch.pageX
        this.touchs.touchStartTime = Date.now()
    }

    touchmove(e) {
        // console.log('123')
        let maxMoveDistance = window.innerWidth * .8 - 4
        let touch = e.changedTouches[0]
        this.touchs.touch.x2 = touch.pageX
        let diff = this.touchs.touch.x2 - this.touchs.touch.x1
        this.touchs.totalDiff = diff + this.touchs.currentDistance

        if (this.touchs.totalDiff > 0) {
            this.touchs.totalDiff = 0
        }
        else if (Math.abs(this.touchs.totalDiff) > (this.cards.Product.length - 1) * maxMoveDistance) {
            // console.log('123')
            this.touchs.totalDiff = -(this.cards.Product.length - 1) * maxMoveDistance
        }
        this.translate(this.touchs.totalDiff)
        // Animate.translates(this.touchs.totalDiff)
    }
    touchend(e) {
        let maxMoveDistance = window.innerWidth * .8 - window.innerWidth * .014275
        let touch = e.changedTouches[0]
        this.touchs.touch.x2 = touch.pageX
        let diff = this.touchs.touch.x2 - this.touchs.touch.x1
        this.touchs.touchEndTime = Date.now()
        this.touchs.currentDistance = this.touchs.totalDiff
        if (Math.abs(diff) > maxMoveDistance / 2 && diff < 0) {
            if (this.touchs.currentItem < 5) {
                this.touchs.currentItem += 1
            }
            let movement = (this.touchs.currentItem * maxMoveDistance)
            // console.log(movement)
            this.touchs.currentDistance = -movement
            this.translate((-movement), 'end')

        } else if (Math.abs(diff) > maxMoveDistance / 2 && diff > 0) {
            if (this.touchs.currentItem >= 1) {
                this.touchs.currentItem -= 1
            }
            var movement = (this.touchs.currentItem * maxMoveDistance)
            if (this.touchs.currentItem == 0) {
                movement = 0
            }
            this.touchs.currentDistance = -movement
            this.translate((-movement), 'end')
        } else {
            var movement = (this.touchs.currentItem * maxMoveDistance)
            if (this.touchs.currentItem == 0) {
                movement = 0
            }
            this.touchs.currentDistance = -movement
            this.translate(-movement, 'end')
        }
    }
    NextPage() {
        Route.NextPage(this.props, '/Cards')
    }
    render() {
        // console.log(this.cards.Product)
        // reaction(() => this.cards.ComBine.map(card => card.BonusRate), (item, index) => {
        //    console.log(item.BonusRate)
        // })
        // const Dots = Loadable({
        //     loader: () => import('../../component/Mycards/Dots'),
        //     loading: <div>123</div>
        // })
        var cards = this.cards.sliderSelect.map((data, index) => {
            return <Card key={index} datas={data} num={data.pdcode} />
            // return  asyncComponent(() => import('../../component/Mycards/Mycard'))
        })
        // console.log(Dots)
        var dots = this.cards.sliderSelect.map((data, index) => {
            return <Dot num={index} move={this.translate.bind(this)} />
        })
        return (
            <div className="CardSliderContainer" onTouchStart={this.touchstart.bind(this)} onTouchMove={this.touchmove.bind(this)}
                onTouchEnd={this.touchend.bind(this)}>
                <div className="CardSliderTitle">Recently used</div>
                <div className="CardSliderShow">
                    {cards}
                </div>
                <div className="CardSliderDots">
                    <div className="StickyDots">
                        {dots}
                    </div>
                    <div className="AllCards" onClick={this.NextPage.bind(this)}><u>All your cards ></u></div>
                </div>
            </div>
        )
    }
}
export default withRouter(CardSlider)