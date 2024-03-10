const sql = require("../models/db.js");
const bcrypt = require('bcrypt');

const saltRounds = 10; // hash password salt 
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

module.exports = app => {
    // update student account
    app.post("/update/student", (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        let { userId, email, password, studentSFSUId, firstName, lastName, addressId,
            ethnicity, major, gender, veteranStatus, lgbtqStatus, financialAidStatus, disabilityStatus, firstGeneration } = req.body; 

        if(emailRegexp.test(email)) {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if(err) {
                    console.log("error: ", err);
                    res.status(500).send({
                        message: 
                            err.message || "Some error occured while encrypting password."
                    })
                }
                password = hash;
                // console.log("hashed: ", password)
    
                // Create a new recruiter account 
                let student = { email, password, studentSFSUId, firstName, lastName, addressId,
                    ethnicity, major, gender, veteranStatus, lgbtqStatus, financialAidStatus, disabilityStatus, firstGeneration }
    
                // update professor in the database
                sql.query(`UPDATE student SET ? WHERE userId=${userId}`, student, (err, data) => {
                    if(err) {
                        console.log("error: ", err);
                        res.status(500).send({
                            message: 
                                err.message || "Some error occured while updating student account."
                        })
                    }
                    console.log(data); 
                    res.status(200).send(data);
                })
            });
        }
    })

    // delete student account 
    app.post("/delete/student", (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        let { userId } = req.body; 

        sql.query(`DELETE FROM student WHERE userId=${userId}`, (err, data) => {
            if(err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while deleting student account."
                })
            }
            console.log(data); 
            res.status(200).send(data);
        })
    })
}