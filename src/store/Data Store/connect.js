import {
    observable,
    action
} from "mobx"


class connection {
 
// OldDemo https://demo.ogloba.com:9900  NewUrl http://192.168.1.152:8080 http://192.168.0.5:8090 http://192.168.56.1:8080/
    @observable Url = 'https://rlp.woodoos.com:8080'
    @observable api_key = 'WYnlNzBrn4VD8z5L'
    @observable api_version = '0.4.11'
    @observable api_id = 'com.ogloba.gc.affinity.mgc.web'
    @observable app_version = '1'

    @action.bound getHeader(username, password) {
        var headers
        if (username !== undefined && password !== undefined) {
            headers = {
                "X-MGC-API-Key": this.api_key,
                "X-MGC-API-Version": this.api_version,
                "X-MGC-APP-ID": this.api_id,
                "X-MGC-APP-Version": this.app_version,
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": 'Basic ' + btoa(username + ":" + password)
            }
        } else {
            headers = {
                "X-MGC-API-Key": this.api_key,
                "X-MGC-API-Version": this.api_version,
                "X-MGC-APP-ID": this.api_id,
                "X-MGC-APP-Version": this.app_version,
                "Content-Type": "application/x-www-form-urlencoded",
            }
        }
        return headers
    }

    @action.bound bodyEncode(item) {
        return Object.keys(item).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(item[key]);
        }).join('&')
    }

}

export default connection