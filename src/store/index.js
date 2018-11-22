

import {
    autorun,
    observable,
    computed,
    action
} from "mobx";
import Touch from './UI Store/touchs'
import Trigger from './UI Store/trigger'
import Timer from './UI Store/Timer'
import Banner from './UI Store/Banner'
import DatePicker from './UI Store/DatePicker'
import Alert from './UI Store/Alert'

import Cards from './Data Store/Cards'
import Reload from './Data Store/Reload'
import Transaction from './Data Store/Transaction'
import Favorite from './Data Store/Favorite'
// import TocuhA from './actions/UI action/touchs'
const mobXUIStore = {
    touch: new Touch,
    trigger: new Trigger,
    timer: new Timer,
    banner: new Banner,
    alert: new Alert,
    datepicker: new DatePicker

}

const mobXDataStore = {
    cards: Cards,
    reload: Reload,
    transaction: Transaction,
    favorite: Favorite
}
export default { mobXUIStore, mobXDataStore }
