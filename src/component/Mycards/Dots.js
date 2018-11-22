import React from 'react'
import { inject, observer, autorun } from 'mobx-react';
import { TimelineLite } from 'gsap'
import { withRouter } from 'react-router-dom'

@inject('store', 'datastore')

@observer
class Dots extends React.Component {

    constructor(props) {
        super(props)
        this.touchs = this.props.store.touch
        this.cards = this.props.datastore.cards
    }
    translate() {
        let maxMoveDistance = window.innerWidth * .8 - window.innerWidth * .014275
        let moveLength = this.props.num * maxMoveDistance
        this.touchs.currentItem = this.props.num
        this.touchs.currentDistance = -moveLength
      
        // console.log(moveLength)
        this.props.move(-moveLength)
    }
    render() {
        var style
        if (this.touchs.currentItem == this.props.num) {
            style = { background: "#444" }
        } else {
            style = { background: "#BDBDBD" }
        }
        return (
            <div className="Dot" style={style} onClick={this.translate.bind(this)} ></div>
        )
    }
}
export default withRouter(Dots)