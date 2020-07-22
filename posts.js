const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res)=>{
    res.json({posts:
        {title:'my post goes here', describe:'data you cannot access'}});

})


module.exports = router;
