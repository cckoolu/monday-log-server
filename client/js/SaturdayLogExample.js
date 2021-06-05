import { httpRequest,SaturdayLog } from './SaturdayLog.js'

window.test = test

function test() {
 

    let url = 'http://127.0.0.1:8080/add_log'
    let method = "POST"
    let data = {
        "test":"tst"
    }

    SaturdayLog(method, url,data);

 
}
