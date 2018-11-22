import {
    autorun,
    observable,
    computed,
    action
} from "mobx"


class Route {
    @action.bound NextPage(page, to) {
        // console.log(page.history)
        console.log('next')
        page.history.push(to)
    }

    @action.bound Pre(page) {
        // console.log(page.history)
        // console.log('back')
        page.history.goBack();
    }
    @action.bound backto(page,where){
        page.history.go(where)
    }
}
let router = new Route

export default router

