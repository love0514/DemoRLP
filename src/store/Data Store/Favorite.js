import {
    observable,
    computed
} from "mobx"


class Favorite {
    @observable favoritelocal = []
    @observable favoritedata = []

}
let Data = new Favorite

export default Data
