const sql = require("../models/db.js");
const bcrypt = require('bcrypt');

const saltRounds = 10; // hash password salt 
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

module.exports = app => {
    // update recruiter account
    app.post("/update/recruiter", (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        let { userId, email, password, companyName, description, addressId, websiteLink } = req.body; 

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
                let recruiter = { email, password, companyName, description, addressId, websiteLink };
    
                // update recruiter in the database
                sql.query(`UPDATE recruiter SET ? WHERE userId=${userId}`, recruiter, (err, data) => {
                    if(err) {
                        console.log("error: ", err);
                        res.status(500).send({
                            message: 
                                err.message || "Some error occured while updating recruiter account."
                        })
                    }
                    console.log(data); 
                    res.status(200).send(data);
                })
            });
        }
    })

    // delete recruiter account 
    app.post("/delete/recruiter", (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        let { userId } = req.body; 

        sql.query(`DELETE FROM recruiter WHERE userId=${userId}`, (err, data) => {
            if(err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while deleting recruiter account."
                })
            }
            console.log(data); 
            res.status(200).send(data);
        })
    })
}