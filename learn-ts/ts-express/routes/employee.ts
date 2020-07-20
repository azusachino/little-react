import express from 'express'
import bodyParser from 'body-parser'

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({})

router.get('/getEmployee', ((req, res) => {
  res.json({
    flag: 1,
    msg: 'no db'
  });
}));

router.post('/createEmployee', urlencodedParser, ((req, res) => {
  res.json({
    flag: 1,
    msg: 'no db'
  });
}));


export default router;
