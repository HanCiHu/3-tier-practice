var express = require("express");
var router = express.Router();
const pool = require('./pool');



/* GET home page. */
router.get("/", async (req, res, next) => {

	const sql = `select * from test`;
	const data = await pool.query(sql, []);
  res.send({data: data[0]});
});

module.exports = router;
