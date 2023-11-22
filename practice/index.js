'use strict';
import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';

import config from './config/config.js';
import { consoleBar, timeLog } from './lib/common.js';
import { ping } from './controller/system.js';
import {getUserInfo, postUser} from './lib/db.js';

// -------------------------- router set ---------------------

const serverPort = config.SERVER_PORT;//바뀌지 않는 변수 (상수)
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));
app.use(cors());
const router = express.Router();

//------------------------api--------------------

router.route('/ping').get(ping);
router.route('/user-info').get(getUserInfo)
router.route('/user').post(postUser);

//---------------------------server start--------------
app.use('/test/api/v1', router)
app.listen(serverPort);
consoleBar();
timeLog('TEST SERVER STARTED')
