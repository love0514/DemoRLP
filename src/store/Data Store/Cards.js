import {
    observable,
    computed,
    map
} from "mobx"

import FavoriteData from '../Data Store/Favorite'
class Cards {
    constructor() {
        this.defaultVisibleItem = 6
    }
    @observable Product = []
    @observable GiftCard = []
    @observable ComBine = []
    @observable UsedItem = []
    @observable VisibleItem = 6
    @observable AllCardsItem = 10
    @observable currentItem
    @observable filter = ''


    @computed get filters() {
        var match = new RegExp(this.filter, "i")

        return this.ComBine.filter(data => match.test(data.name))
    }
    @computed get visiblePD() {
        return this.filters.slice(0, this.VisibleItem)
    }
    @computed get sliderSelect() { 
        ///ResentCard排序
        let Used = this.ComBine.filter(data => data.state == "N")
        // console.log(Used)
        let Sort = Used.sort(function (a, b) {
            return b.lastTransactionTime - a.lastTransactionTime
        }), slideItem = [], resentUsed = []
        try {
            ///取得FavoriteCard資料
            // let isFavorite = localStorage.getItem('FavoriteSlide');
            // console.log(FavoriteData.favoritelocal)
            if (FavoriteData.favoritelocal) {
                ///核對FavoriteCard並註冊到store中

                // let favorite = this.ComBine.filter(data => {
                //     let favo = JSON.parse(isFavorite).filter(item => {
                //         // if (item.itemcode == data.itemCode) {
                //         //     data.favorite = true
                //         // } else {
                //         //     data.favorite = false
                //         // }
                //         return item.itemcode == data.itemCode && item.pdcode == data.pdcode
                //     })
                //     return favo.length == 1 && favo
                // })


                ///排除已經成為favorite的卡
                let favitem = FavoriteData.favoritedata.slice(-3)
                Array.prototype.forEach.call(favitem, data => {
                    let fved = Sort.map(item => item.pdcode).indexOf(data.pdcode)
                    Sort.splice(fved, 1)
                })
                ////合併ResentCARD 和 Favorite  Card
                slideItem = [...favitem, ...Sort.slice(0, 6 - favitem.length)]

            } else {
                slideItem = [...Sort.slice(0, 6)]
            }
        } catch (e) {
            // slideItem = [...Sort.slice(-6)]
            console.log('false')
        }
        // console.log(slideItem)
        return slideItem
    }
}
let Data = new Cards

export default Data

