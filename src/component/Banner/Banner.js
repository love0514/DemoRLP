import React from 'react'
import { inject, observer } from 'mobx-react';
import { TimelineLite } from 'gsap'
import { withRouter } from 'react-router-dom'
import Fetch from '../../store/actions/FetchData'
import Dot from '../../component/Mycards/Dots'
import './Banner.scss'
@inject('store')

@observer
class Banner extends React.Component {

    constructor(props) {
        super(props)
        this.banner = this.props.store.banner
        this.timer
        this.fetch = new Fetch
    }

    async componentDidMount() {
        // await this.fetch.GetBanner()
        let tl = new TimelineLite
        let target = document.querySelector('.BannerShow')
        let maxMoveDistance = window.innerWidth
        this.timer = setInterval(() => {
            // console.log('banner')
            if (this.banner.currentItem == 3) {
                this.banner.currentItem = 0
            } else {
                this.banner.currentItem++
            }
            let movement = (this.banner.currentItem * maxMoveDistance)
            tl.to(target, .5, { x: -movement, ease: Power2.easeOut })
        }, 5000)




    }
    translate(x) {
        let target = document.querySelector('.BannerShow')
        let tl = new TimelineLite
        tl.to(target, .5, { x: x, ease: Power2.easeOut })
    }
    componentWillUnmount() {
        this.banner.currentItem = 0
        clearInterval(this.timer)
    }
    async MoveBanner(itemNum) {
        let tl = new TimelineLite
        let target = document.querySelector('.BannerShow')
        let maxMoveDistance = window.innerWidth
        let moveLength = itemNum * maxMoveDistance
        this.banner.currentItem = itemNum


        await this.translate(-moveLength)
        await clearInterval(this.timer);
        this.timer = setInterval(() => {
            console.log('banner')
            if (this.banner.currentItem == 3) {
                this.banner.currentItem = 0
            } else {
                this.banner.currentItem++
            }
            let movement = (this.banner.currentItem * maxMoveDistance)
            tl.to(target, .5, { x: -movement, ease: Power2.easeOut })
        }, 5000)
    }
    render() {
        // console.log(123)
        // var dots = this.cards.ComBine.map((data, index) => {
        //     return <Dot num={index} move={this.translate.bind(this)} />
        // })
        return (
            <div className="BannerContainer">
                <div className="BannerShow">
                    <div className="bannerItem"></div>
                    <div className="bannerItem" style={{ background: "red" }}></div>
                    <div className="bannerItem" style={{ background: "blue" }}></div>
                    <div className="bannerItem" style={{ background: "yellow" }}></div>
                </div>
                <div className="BannerDots">
                    <div className="dot" onClick={this.MoveBanner.bind(this, 0)} style={this.banner.currentItem == 0 ? { background: '#C4C4C4' } : { background: '#FFF' }}></div>
                    <div className="dot" onClick={this.MoveBanner.bind(this, 1)} style={this.banner.currentItem == 1 ? { background: '#C4C4C4' } : { background: '#FFF' }}></div>
                    <div className="dot" onClick={this.MoveBanner.bind(this, 2)} style={this.banner.currentItem == 2 ? { background: '#C4C4C4' } : { background: '#FFF' }}></div>
                    <div className="dot" onClick={this.MoveBanner.bind(this, 3)} style={this.banner.currentItem == 3 ? { background: '#C4C4C4' } : { background: '#FFF' }}></div>
                </div>
            </div>
        )
    }
}
export default withRouter(Banner)