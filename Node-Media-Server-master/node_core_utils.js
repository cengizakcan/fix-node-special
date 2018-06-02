//
//  Created by Mingliang Chen on 17/8/23.
//  illuspas[a]gmail.com
//  Copyright (c) 2017 Nodemedia. All rights reserved.
//
const Crypto = require('crypto');
const EventEmitter = require('events');
const context = require('./node_core_ctx');
const fetch         = require('node-fetch');

function generateNewSessionID() {
  let sessionID = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWKYZ0123456789';
  const numPossible = possible.length;
  do {
    for (let i = 0; i < 8; i++) {
      sessionID += possible.charAt((Math.random() * numPossible) | 0);
    }
  } while (context.sessions.has(sessionID))
  return sessionID;
}

function genRandomName() {
  let name = '';
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const numPossible = possible.length;
  for (let i = 0; i < 4; i++) {
    name += possible.charAt((Math.random() * numPossible) | 0);
  }

  return name;
}

async function apiConnect(signStr, streamId, secretKey) {
	/*
	let streamName 		= streamId.split("/");
    let apiServer 		= await fetch("http://127.0.0.1/api/control/"+streamName[2]+"/"+signStr);
    let apiResult 		= await apiServer.json();
*/
    return "success";

}

function verifyAuth(signStr, streamId, secretKey) {

    return new Promise(function (resolve,reject) {

        apiConnect(signStr, streamId, secretKey).then(function (result) {
            resolve(result);
        },function(error){
            reject(error);
        })
    });
}



module.exports.generateNewSessionID = generateNewSessionID;
module.exports.verifyAuth = verifyAuth;
module.exports.genRandomName = genRandomName;