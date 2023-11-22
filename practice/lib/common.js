'use strict';
import moment from 'moment-timezone'

function timeLog(log) {
    const time_current = moment().tz('Asia/Seoul').format('YYYY-MM-DD H:mm:ss')
    console.log('[KST:API 호출' + time_current + ']' + log)
}

function resSend(res, data) {
    if (data.error) {
        timelog('   error = '+JSON.stringify(data.error))
    }
    res.send(data)
    timeLog(' ==> res=' + JSON.stringify(data)); //정상 리턴인 경우
}

function consoleBar() {
    console.log('----------------------------------------------------')
}

export{ timeLog, resSend, consoleBar};