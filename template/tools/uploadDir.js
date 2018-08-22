'use strict'
/*
* 用法：
* @param path 为服务器目标文件夹，也就是要上传的文件夹，默认为 /usr/share/nginx/html/rocket-ui/
* 运行命令 node uploadDir.js -user=path
* 先新建备份文件夹，以日期时间命名，然后将 static 和 index.html 移至备份文件夹。最后上传文件夹到服务器。
* */

const ClientSsh = require('ssh2').Client;
const moment = require('moment')
const Client = require('ssh2-sftp-client');
const path = require('path');
const fs = require('fs');
const yargs = require('yargs');
const sftp = new Client();
const sshFun = require('./ssh')
const user = yargs.argv.user || '/usr/share/nginx/html/rocket-ui/';
const remoteDir = '/usr/share/nginx/html/rocket-ui';
const localDir = path.resolve(__dirname, '../dist')

var conn = new ClientSsh();
const server = {
  host: '192.168.2.25', // ftp服务器ip地址
  username: 'root', // 你的登录用户名
  password: 'webteam.ascs.tech' // 你的密码
}

conn.on('ready', function() {
  console.log('Client :: ready');
  let filesName = moment(new Date()).format('M-D-HH:mm:ss')
  console.log(filesName)
  conn.sftp(function(err, sftp) {
    if (err) throw err;
    sftp.readdir(remoteDir, function(err, list) {
      if (err) throw err;
      console.dir(list);
      conn.end();
    });
  });
  conn.exec(`mkdir ${remoteDir}/${filesName} && mv ${remoteDir}/static ${remoteDir}/${filesName} && mv ${remoteDir}/index.html ${remoteDir}/${filesName}`, function(err, stream) {
    if (err) throw err;
    stream.on('close', function(code, signal) {
      console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
      conn.end();
      sftp.connect({
        host: '192.168.2.25', // ftp服务器ip地址
        username: 'root', // 你的登录用户名
        password: 'webteam.ascs.tech' // 你的密码
      }).then(() => {
        console.log('ftp文件服务器连接成功');
        sshFun.UploadDir(server, localDir, remoteDir, () => {
          console.log('文件夹上传成功')
        })
      }).then((data) => {
      }).catch(err => {
        console.log(err, 'catch error');
      });
    }).on('data', function(data) {
      console.log('STDOUT: ' + data);
    }).stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    });
  });
}).connect(server);

// 清空文件夹
async function emptyDir(dir) {
  let list = await listDir(dir)
  const tasks = list.map(item => {
    return new Promise((resolve, reject) => {
      if (item.type === '-') {
        sftp.delete(user + item.name).then(() => {
          console.log(item.name + '文件已删除')
          resolve()
        }).catch(err => {
          console.log(err)
          reject(err)
        })
      } else {
        sftp.rmdir(user + item.name, true).then(() => {
          console.log(item.name + '文件夹已删除')
          resolve()
        }).catch(err => {
          console.log(err)
          reject(err)
        })
      }
    })
  })
  return Promise.all(tasks)
}

function listDir(dir) {
  return new Promise((resolve, reject) => {
    sftp.list(dir).then(list => {
      resolve(list)
    }).catch(err => {
      reject(err)
    })
  })
}

