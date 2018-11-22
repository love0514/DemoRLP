import React from 'react'
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import './TextBar.scss'
// import CardsAction from '../../store/actions/Cards'
import Route from '../../store/actions/Route'
@inject('store', 'datastore')
@observer

class TextBar extends React.Component {
    constructor(props) {
        super(props)
        this.cards = this.props.datastore.cards
        this.fvItem = this.props.datastore.favorite
        // console.log(this.fvItem)
        // if (localStorage.getItem('FavoriteSlide')) {
        //     // console.log(JSON.parse(localStorage.getItem('FavoriteSlide')))
        //     this.favorites = JSON.parse(localStorage.getItem('FavoriteSlide'))
        //     if (this.favorites) {
        //         this.isFavorite = this.favorites.filter(data => data.itemcode == this.cards.currentItem.itemCode)
        //     }
        // }
        // console.log(this.favorites)
    }
    Back() {
        Route.Pre(this.props)
    }
    favorite() {
        // console.log(this.favorites)
        // if (this.fvItem.length !== 0) {
        //     if (this.cards.currentItem.favorite == false) { 
        //         this.cards.currentItem.favorite = 1
        //         this.fvItem.push({ itemcode: this.cards.currentItem.itemCode, pdcode: this.cards.currentItem.pdcode })
        //         console.log(this.fvItem)
        //         localStorage.setItem('FavoriteSlide', JSON.stringify(this.fvItem))
        //         document.querySelector('.TextIconAfter').style.background = "url(/images/ogloba/icons/ico_24_star_yellow.png) 0 0 no-repeat"
        //         // console.log(isFavorite)
        //     } else {
        //         // console.log(this.cards.currentItem.itemCode)
        //         let fvc = this.fvItem.map(data => data.itemcode).indexOf(this.cards.currentItem.itemCode)
        //         console.log(fvc)
        //         document.querySelector('.TextIconAfter').style.background = "url(/images/ogloba/icons/ico_24_star_transparent.png) 0 0 no-repeat"
        //         // console.log('23')
        //     }
        // } else {
        //     localStorage.setItem('FavoriteSlide', JSON.stringify([{ itemcode: this.cards.currentItem.itemCode, pdcode: this.cards.currentItem.pdcode }]))
        //     document.querySelector('.TextIconAfter').style.background = "url(/images/ogloba/icons/ico_24_star_yellow.png) 0 0 no-repeat"
        // }

        this.cards.currentItem.favorite = !this.cards.currentItem.favorite
        // let favc = localStorage.getItem('FavoriteSlide')
        // if (favc) {
        //     let favorite = JSON.parse(favc)
        //     console.log(favorite)
        // }
    }
    componentWillUnmount() {

        if (this.fvItem.favoritelocal.length == 0) {
            if (this.cards.currentItem.favorite) {
                let updateItem = []
                updateItem.push({ itemcode: this.cards.currentItem.itemCode, pdcode: this.cards.currentItem.pdcode })
                localStorage.setItem('FavoriteSlide', JSON.stringify(updateItem))
            }
        } else {
            let check = this.fvItem.favoritelocal.map(data => {
                return data.itemcode
            }).indexOf(this.cards.currentItem.itemCode)
            if (check == -1 && this.cards.currentItem.favorite) {
                this.fvItem.favoritelocal.push({ itemcode: this.cards.currentItem.itemCode, pdcode: this.cards.currentItem.pdcode })
                // console.log(updateItem)  
                // console.log(JSON.stringify(this.fvItem))
                localStorage.setItem('FavoriteSlide', JSON.stringify(this.fvItem.favoritelocal))
            } else if (check !== -1 && this.cards.currentItem.favorite == false) {
                console.log(check)
                this.fvItem.favoritelocal.splice(check, 1)
                // console.log(this.fvItem.favoritelocal)
                localStorage.setItem('FavoriteSlide', JSON.stringify(this.fvItem.favoritelocal))
            }
        }

        // console.log(check)
        // if (check == -1) {
        //     // console.log('add')
        // if (this.cards.currentItem.favorite) {
        //     // console.log(this.fvItem.favoritelocal)
        //     if () {

        //         // let Favorite = localStorage.getItem('FavoriteSlide');
        //         let updateItem = []
        //         updateItem.push({ itemcode: this.cards.currentItem.itemCode, pdcode: this.cards.currentItem.pdcode })
        //         localStorage.setItem('FavoriteSlide', JSON.stringify(updateItem))
        //     } else {
        //         this.fvItem.favoritelocal.push({ itemcode: this.cards.currentItem.itemCode, pdcode: this.cards.currentItem.pdcode })
        //         // console.log(updateItem)
        //         // console.log(JSON.stringify(this.fvItem))
        //         localStorage.setItem('FavoriteSlide', JSON.stringify(this.fvItem.favoritelocal))
        //     }

        // }
        // } else {
        //     // console.log('remove')
        //     if (!this.cards.currentItem.favorite) {

        //         // let Favorite = localStorage.getItem('FavoriteSlide');
        //         // let updateItem = JSON.parse(Favorite)
        //         // updateItem.splice(check, 1)
        //         // console.log(updateItem)
        //         // localStorage.setItem('FavoriteSlide', JSON.stringify(this.fvItem))
        //     }
        // }
        // this.fvItem.push({ itemcode: this.cards.currentItem.itemCode, pdcode: this.cards.currentItem.pdcode })
        // // console.log(JSON.stringify(this.fvItem))
        // localStorage.setItem('FavoriteSlide', JSON.stringify(this.fvItem))
    }
    render() {
        console.log(this.cards.currentItem.favorite)
        let FvStyle = {}
        if (this.cards.currentItem.favorite) {
            FvStyle = { background: 'url(/images/ogloba/icons/ico_24_star_yellow.png) 0 0 no-repeat' }
        }
        return (
            <div className="TextContainer">
                <div className="TextIconBefore" onClick={this.Back.bind(this)}></div>
                <div className="TextTitle">{this.cards.currentItem.name}</div>
                <div className="TextIconAfter" style={FvStyle} onClick={this.favorite.bind(this)}></div>
            </div>
        )
    }
}
export default withRouter(TextBar)