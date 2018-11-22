import {
    autorun,
    observable,
    computed,
    action
} from "mobx"
import Datas from '../Data Store/Cards'
import Fetch from '../../store/actions/FetchData'
class Cards {
    constructor() {
        this.fetch = new Fetch
    }
    @action.bound async SelectItem(data) {
        Datas.currentItem = data
    }
    @action.bound async UpdateCard() {
        let data = await this.fetch.GetCardByCardNum(Datas.currentItem.cardNumber)
        let IschangeItem = Datas.ComBine.map(item => item.cardNumber).indexOf(data.cardNumber)
        await Object.assign(Datas.ComBine[IschangeItem], data)
    }
    @action.bound async combine() {
        var combin = []
        // console.log(Datas.Product)
        Array.prototype.forEach.call(Datas.Product, (item, index) => {
            // console.log(item.itemCode)
            let card = Datas.GiftCard.filter(card => (item.itemCode == card.itemCode))
            // console.log(card.length)
            if (card.length == 1 || card.length == 2) {
                // console.log(item.category)
                const copyItem = Object.assign({}, item)
                const copyCard = Object.assign({}, card[0])
                const product = Object.assign(copyItem, copyCard, { pdcode: index })
                combin.push(product)
                // console.log(product)
            }
        })
        let UnsetChild = Datas.GiftCard.filter(data => data.parentCard !== null)
        Array.prototype.forEach.call(UnsetChild, datas => {
            let parents = combin.filter(cards => (cards.cardNumber == datas.parentCard))
            if (parents[0] !== undefined) {
                if (parents[0].childCards == undefined) {
                    Object.assign(parents[0], { childCards: [datas] })
                } else {
                    parents[0].childCards = parents[0].childCards.concat([datas])
                }
            }
        })
        Datas.ComBine = combin
        return true
    }
    @action.bound async Sort(depend) {
        let Sort = await Datas.ComBine.sort(function (a, b) {
            // console.log(b[depend])
            return b[depend] - a[depend]
        })
        Datas.ComBine = Sort
        // console.log('sort')
    }
}
let Data = new Cards

export default Data



// autorun(()=>{
//     console.log(touchs.currentItem)
// })