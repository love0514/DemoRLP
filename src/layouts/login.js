import React from 'react'
import { inject, observer } from 'mobx-react';
// import { TimelineLite } from 'gsap'
import { withRouter } from 'react-router-dom'

import Login from '../store/actions/Login'

import './login.scss'

@inject('datastore')
@observer
class login extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.datastore
        window.login = this.store.login
    }

    render() {
        console.log(this.store.login)
        return (

            <div className="content">
                <img src="" alt="" />
                <div className="title">Gift Card應用程式 -RLP</div>
                <div className="inputbox">
                    <div className="lable">帳號</div>
                    <input type="text" onBlur={this.tst.bind(this)} type="tel" name="account" id="account" value={this.store.login.account} onChange={Login.InputChange} />

                </div>
                <div className="inputbox">
                    <div className="lable">密碼</div>
                    <input type="text" name="password" id="password" value={this.store.login.password} onChange={Login.InputChange} />
                </div>
                <div className="inputbox">
                    <div className="lable">身分</div>
                    <input disabled type="text" name="id" id="" />
                </div>

                <div className="loginbtn">
                    <div className="button enter"><i class="fas fa-check"></i> 登入</div>
                    <div className="button reset"><i class="fas fa-ban"></i> 清空</div>
                </div>
            </div>
        )
    }
}
export default withRouter(login)