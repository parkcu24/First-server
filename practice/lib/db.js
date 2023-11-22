'use strict';
import dotenv from 'dotenv'
dotenv.config();

import { pool } from './connect.js';
import { consoleBar, timeLog } from './common.js';

// -------------get<user-info>------------------

const getUserInfo = async(req,res) => {
    const query = 'SELECT * FROM user;';

    const results = {};
    results.result = true;
    results.error =[]
    results.users = [];
    // {results : {}}

    try {
        const connection = await pool.getConnection(async conn => conn)
        try{
            const [rows, fields] = await connection.query(query);
            for (let i =0; i < rows.length; i++) {
                results.users.push(rows[i]);
            }
            console.log(rows);
        } catch(err){
            results.result = false;
            results.error.push('Query Error');
        }
        connection.release();
    } catch (err){
        results.result = false;
        results.error.push('DB Error'+err.message) 
    }

    res.send(results);
    consoleBar();
    timeLog('[GET] user-info called // '+JSON.stringify(req.query)+ ' // ' + JSON.stringify(results));
};

export {getUserInfo};