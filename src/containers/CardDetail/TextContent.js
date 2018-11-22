import React from 'react'
import { inject, observer, autorun } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

@inject('datastore')


@observer
class TextContent extends React.Component {

    constructor(props) {
        super(props)
        this.cards = this.props.datastore.cards
    }

    render() {

        return (

            <div className="ContentText">
                {this.cards.currentItem.productInstructions}
            </div>

        )
    }
}
export default withRouter(TextContent)