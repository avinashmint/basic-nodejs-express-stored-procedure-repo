var express = require('express');
var router = express.Router();
var path = require('path');
const https = require('https');
var db = require('/home/ubuntu/pdmc/api/routes/db/getData');
const jwt = require("jsonwebtoken");
const fs = require('fs')
var multer	=	require('multer');
const bodyParser = require('body-parser')
var fetch =  require('node-fetch');

router.use(bodyParser.urlencoded({ extended: false }))

router.use(bodyParser.json())
router.use(bodyParser.text())

router.use(express.json());

router.get('/fetchcrop' ,function(req,res,next){ 
    console.log(req.query);
    db.getCrop(req.query,function(err,rows){
        if(err)
        {
            res.json(err);
            res.end();
        }
        else{
            res.json(rows[0]);
            res.end();
        }
    });
});

module.exports = router;