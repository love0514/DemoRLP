import React from 'react'
import { inject, observer } from 'mobx-react';
import './Loading.scss'
import LoadingAction from '../../store/actions/Loading'
@inject('store')

@observer

class Loading extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('loading')
        document.querySelector('.lds-spinner').style.opacity = 0
    }
    render() {
        return (
            <div className="lds-css ng-scope">
                <div className="lds-spinner">
                    <div className="Ids-spinner-item"></div>
                    <div className="Ids-spinner-item"></div>
                    <div className="Ids-spinner-item"></div>
                    <div className="Ids-spinner-item"></div>
                    <div className="Ids-spinner-item"></div>
                    <div className="Ids-spinner-item"></div>
                    <div className="Ids-spinner-item"></div>
                    <div className="Ids-spinner-item"></div>
                    <div className="Ids-spinner-item"></div>
                    <div className="Ids-spinner-item"></div>
                    <div className="Ids-spinner-item"></div>
                    <div className="Ids-spinner-item"></div>
                </div>
            </div>
        )
    }
}
export { LoadingAction, Loading }