import {
    action, observable, computed, runInAction, set
} from "mobx"
import connect from '../Data Store/connect'
import Data from '../Data Store/Cards'
import { LoadingAction } from '../../component/Loading/Loading'
class Fetch {
    constructor() {
        this.connect = new connect
        // this.Data =new Data
    }
    @action.bound async GetBanner() {
        await fetch(`http://192.168.1.144:8080/gc-affinity-mgc-gateway/OGLOBA_TH/resources/sponsorBanner`,
            {
                method: "GET",
                headers: this.connect.getHeader("0000000242", "YP8ZAC4H57VI"),
            })
            .then(res => res.json()
            )
            .then(data => {
                console.log(data)
                // Data.Product = data.products.concat(data.products);
                // Data.Product = data.products;
                // return data.products
            })

            .catch(function (res) { console.log(res) })
    }
    @action.bound AutoRigster(){
         fetch(`http://13.229.71.143:8080/gc-affinity-mgc-gateway/users/autoRegistration`,
        {
            method: "POST",
            headers: this.connect.getHeader(),
            body:this.connect.bodyEncode({'msisdn':"+886977188802"})
        })
        .then(res => res.json()
        )
        .then(data => {
            console.log(data)
            // Data.Product = data.products.concat(data.products);
            // Data.Product = data.products;
            // return data.products
        })

        .catch(function (res) { console.log(res) })
    }
    @action.bound async Test() {
        var subject = "Test ticket #"
        var body = "This is test ticket #" 
        await fetch(`/api/v2/tickets.json`,
            {
                method: "GET",
                headers: {
                    // "Content-Type": "application/json",
                    "Authorization": 'Basic ' + btoa('stch@ogloba.com' + ":" + 'cherry2503'),
                    
                },
                // mode:'no-cors'
                // data: JSON.stringify({ "ticket": { "subject": subject, "comment": { "body": body } } })
            })
            .then(res => res.json()
            )
            .then(data => {
                console.log(data)
                // Data.Product = data.products.concat(data.products);
                // Data.Product = data.products;
                // return data.products
            })

            .catch(function (res) { console.log(res) })
    }
    @action.bound async GetProduct() {
        var resent = this
        await fetch(`${this.connect.Url}/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/customers/0000000242/products`,
            {
                method: "GET",
                headers: this.connect.getHeader("0000000242", "YP8ZAC4H57VI"),
            })
            .then(res => res.json()
            )
            .then(data => {
                // console.log(data.products)
                // Data.Product = data.products.concat(data.products);
                Data.Product = data.products;
                return data.products
            })
            .then(data => {
                // console.log(data)
                // Array.prototype.forEach.call(data, async (item, index) => {

                //     let Rate = await resent.GetBounsRate(item.itemCode)
                //     // console.log(Data.Product)
                //     if (Rate.events[0] == undefined) {
                //         // console.log(Data.Product[index])
                //         Data.Product[index].BonusRate = 0
                //     } else {
                //         // console.log( Rate.events[0].bonusRate)
                //         Data.Product[index].BonusRate = Rate.events[0].bonusRate
                //     }
                // })
                // console.log(Data.Product)
            })
            .catch(function (res) { console.log(res) })
        return true
    }
    @action.bound async GetCards() {
        await fetch(`${this.connect.Url}/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/customers/0000000242/giftCards`,
            {
                method: "GET",
                headers: this.connect.getHeader("0000000242", "YP8ZAC4H57VI"),
            })
            .then(res => res.json()
            )
            .then(data => {
                // console.log(data.giftCards.concat(data.giftCards))
                // Data.GiftCard = data.giftCards.concat(data.giftCards);
                Data.GiftCard = data.giftCards;
            })
            .catch(function (res) { console.log(res) })
        return true
    }
    @action.bound async GetBounsRate(itemCode) {
        // var datas
        let bns = await fetch(`${this.connect.Url}/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/products/${itemCode}/event?activateAmt=1`,
            {
                method: "GET",
                headers: this.connect.getHeader("0000000242", "YP8ZAC4H57VI"),
            })
            .then(res => res.json())
            .then(data => {
                // console.log('bonus')
                // datas = data
                return data
                // store.currentItem = resent.props.datas;
                // store.currentItem.BonusRate = data.events[0].bonusRate
            })
            .catch(function (res) {
                // translator.Prepage('slide', 0)
                console.log(res)
            })
        // console.log(bns)
        return bns
        // return datas
    }
    @action.bound async GetHotCard() {
        await fetch(`${this.connect.Url}/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/products/0000000242/categories/products?categoryId=161`,
            {   
                method: "GET",
                headers: this.connect.getHeader("0000000242", "YP8ZAC4H57VI")
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // Array.prototype.forEach.call(data.cateProdList, (datas) => {
                //     select.types.push({ id: datas.id, name: datas.name, itemCodeList: datas.itemCodeList })
                // })
            })
            .catch(function (res) {
                console.log(res)
            })
    }
    @action.bound async GetCardOTP(cardNumber) {
        LoadingAction.Start()
        await fetch(`${this.connect.Url}/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/transactions/0000000242/otp/${cardNumber}`,
            {
                method: "GET",
                headers: this.connect.getHeader("0000000242", "YP8ZAC4H57VI"),
            })
            .then(res => res.json())
            .then(data => {
                Data.currentItem.otp = data.otp
                // console.log(data)
                LoadingAction.Stop()
            })
            .catch(function (res) {
                console.log(res)
            })
    }
    @action.bound async GetCardByCardNum(CardNum) {
        let data = await fetch(`${this.connect.Url}/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/customers/0000000242/giftCards/${CardNum}`,
            {
                method: "GET",
                headers: this.connect.getHeader("0000000242", "YP8ZAC4H57VI"),
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                return data
            })
            .catch(function (res) { console.log(res) })
        return data
    }
    @action.bound async GetProductByCategory() {
        fetch(`${this.connect.Url}/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/products/$0000000242/categories`,
            {
                method: "GET",
                headers: this.connect.getHeader("0000000242", "YP8ZAC4H57VI")
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // Array.prototype.forEach.call(data.cateProdList, (datas) => {
                //     select.types.push({ id: datas.id, name: datas.name, itemCodeList: datas.itemCodeList })
                // })
            })
            .catch(function (res) { console.log(res) })

    }

}
export default Fetch



// autorun(()=>{
//     console.log(touchs.currentItem)
// })