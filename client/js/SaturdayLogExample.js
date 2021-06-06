import { SaturdayLog,httpRequest } from './SaturdayLog.js'

window.test = test

function test() {
 

    let url = 'http://127.0.0.1:8080/add_log'

    // let data = {
    //     "test":"tst"
    // }

    // httpRequest(url,data);

    let log = new SaturdayLog('http://127.0.0.1:8080/add_log', 'UTF-8', 'foo.com/info');
    log.beginCheckpoint('log test case')
    log.variable('变量1', '值1')
    log.input('var2', 'value2');
    log.output('var3', 'value3');
    log.error('error message');
    log.warn('warn message');
    log.info('info message');
    log.debug('debug message');
    log.trace('trace message');
    log.endCheckpoint('log test case')


 
}
