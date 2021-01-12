const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'name'
})
//连接数据库
connection.connect();

connection.query('',(error,results,fields)=>{
    if(error){
        throw error
    }

    console.log('查询数据库的结果为',results)
})