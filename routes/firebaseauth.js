const express = require('express');
const router = express.Router();
var admin = require("firebase-admin");
var serviceAccount = require("../service-account-file.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sdgeventsapp.firebaseio.com"
});
var db = admin.database();

router.get('/health', function (req, res) {
  res.send('I am alive!');
})

router.post('/sdginfo', async function (req, res) {
  let ref=db.ref('goals');
  let s= await ref.on('value',(data)=>{
    res.send(data);
  })
})

module.exports = router;