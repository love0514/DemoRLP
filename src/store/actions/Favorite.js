import {
    autorun,
    observable,
    computed,
    action
} from "mobx"
import Datas from '../Data Store/Cards'
import FavoriteData from '../Data Store/Favorite'
class FavoriteA {
    @action.bound async Favorite() {
        let Sort = Datas.ComBine.sort(function (a, b) {
            return b.lastTransactionTime - a.lastTransactionTime
        })
        // console.log(Sort)
        ///取得FavoriteCard資料
        let isFavorite = localStorage.getItem('FavoriteSlide');
        // console.log(isFavorite)
        if (isFavorite) {
            ///核對FavoriteCard並註冊到store中
            let favorite = Sort.filter(data => {
                let favo = JSON.parse(isFavorite).filter(item => {
                    // console.log(item.itemcode == data.itemCode)
                    if (item.itemcode == data.itemCode) {
                        return true
                        // return item.itemcode == data.itemCode && item.pdcode == data.pdcode
                    } else {
                        return false
                    }

                })
                // console.log(favo)
                if (favo.length !== 0) {
                    data.favorite = true
                } else {
                    data.favorite = false
                }
                return favo.length == 1 ? favo : ''
            })
            // console.log(favorite)
            FavoriteData.favoritelocal = JSON.parse(isFavorite)
            FavoriteData.favoritedata = favorite
        }
    }
}
let Data = new FavoriteA

export default Data



// autorun(()=>{
//     console.log(touchs.currentItem)
// })