const sql = require("../models/db.js");

module.exports = app => {
    // search student
    app.post("/searchstudent", (req, res) => {
        let { studentSFSUId } = req.body; 

        sql.query(`SELECT * FROM student where studentSFSUId=${studentSFSUId}`, (err, data) => {
            if(err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while retrieving student account."
                })
            }
            else {
                console.log(data);
                res.status(200).send(data); 
            }
        })
    })
}