const sql = require("../models/db.js");
const bcrypt = require('bcrypt');

const saltRounds = 10; // hash password salt 
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

module.exports = app => {
    // update professor account
    app.post("/update/professor", (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        let { userId, email, password, firstName, lastName, university } = req.body; 

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
                let professor = { email, password, firstName, lastName, university };
    
                // update professor in the database
                sql.query(`UPDATE professor SET ? WHERE userId=${userId}`, professor, (err, data) => {
                    if(err) {
                        console.log("error: ", err);
                        res.status(500).send({
                            message: 
                                err.message || "Some error occured while updating professor account."
                        })
                    }
                    console.log(data); 
                    res.status(200).send(data);
                })
            });
        }
    })

    // delete professor account 
    app.post("/delete/professor", (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        let { userId } = req.body; 

        sql.query(`DELETE FROM professor WHERE userId=${userId}`, (err, data) => {
            if(err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while deleting professor account."
                })
            }
            console.log(data); 
            res.status(200).send(data);
        })
    })
}