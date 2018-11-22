import React from 'react'
import { inject, observer } from 'mobx-react';
import { TimelineLite } from 'gsap'
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
// import Components from '../component/'
import CardSlider from './CardSlider'
import HotCard from './HotCards'
import Banner from '../../component/Banner/Banner'
import { Loading } from '../../component/Loading/Loading'
// import LoadingAction from '../../store/actions/Loading'
import './Home.scss'
@inject('store')
@observer

class homepage extends React.Component {


    constructor(props) {
        super(props)
        this.touch = this.props.store.touch
    }
    restoreEvent(ev, defaultTarget) {
        // console.log('move')
        var _target = ev.target,
            _ss = document.querySelector(`.${defaultTarget}`),
            _point = ev.touches[0],
            _top = _ss.scrollTop
        var _bottomFaVal = _ss.scrollHeight - _ss.offsetHeight;
        // console.log(_ss)
        // if (_ss.id === defaultTarget) {
        // console.log(123)
        if (_top === 0) {
            if (_point.clientY > this.touch.touch.y1) {
                // console.log('stop')
                ev.preventDefault();
            } else {
                // console.log('move')
                ev.stopPropagation();
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
        console.log(123)
        let touch = e.changedTouches[0]
        this.touch.touch.y2 = touch.pageY
    }
    componentDidMount() {
        let resent = this
        // LoadingAction.Start()
        // document.querySelector('.ScrollBlock').addEventListener('touchmove', function (e) {
        //     // resent.restoreEvent(e, 'ScrollBlock');
        //     // e.stopPropagation()
        // }, false)
    }
    render() {
        return (
            <div className="homepage_container" >
                <Loading />
                <div id="ScrollBlock" className="ScrollBlock" >
                    <CardSlider />
                    <HotCard />
                </div>
                <Banner />
            </div>

        )
    }
}
export default withRouter(homepage)