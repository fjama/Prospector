const sql = require("../models/db.js");
const bcrypt = require('bcrypt');

function getUserMatch(data, email) {
    return data.filter(account => { return account.email == email })
}

module.exports = app => {
    // sign in 
    app.post("/signin", (req, res) => {
        const { email, password } = req.body;

        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        if(emailRegexp.test(email)) { 

            sql.query('SELECT * FROM student', (err, data) => {
                if (err) {
                    console.log("error: ", err);
                    res.status(500).send({
                        message: 
                            err.message || "Some error occured while signin in."
                    })
                }
    
                // console.log('student: ', data);
                let user = getUserMatch(data, email); 

                if(user.length != 0) { 
                    console.log('student: ', user);
                    let hash_pass = user[0].password;
                    // console.log(hash_pass)
                    bcrypt.compare(password, hash_pass, (err, result) => {
                        if(result) {
                            res.status(200).send({
                                accountType: 'student',
                                account: user,
                            }); 
                        }
                    });
                }
            })
            
            sql.query('SELECT * FROM recruiter', (err, data) => {
                if (err) {
                    console.log("error: ", err);
                    res.status(500).send({
                        message: 
                            err.message || "Some error occured while signin in."
                    })
                }
    
                // console.log('recruiter: ', data);
                let user = getUserMatch(data, email); 

                if(user.length != 0) { 
                    console.log('recruiter: ', user);
                    let hash_pass = user[0].password;
                    // console.log(hash_pass)
                    bcrypt.compare(password, hash_pass, (err, result) => {
                        if(result) {
                            res.status(200).send({
                                accountType: 'recruiter',
                                account: user,
                            }); 
                        }
                    });
                }
            })
    
            sql.query('SELECT * FROM professor', (err, data) => {
                if (err) {
                    console.log("error: ", err);
                    res.status(500).send({
                        message: 
                            err.message || "Some error occured while signin in."
                    })
                }
    
                // console.log('professor data: ', data);
                let user = getUserMatch(data, email); 
                // console.log('professor user: ', user)

                if(user.length != 0) { 
                    console.log('professor: ', user);          
                    let hash_pass = user[0].password;
                    // console.log(hash_pass)
                    bcrypt.compare(password, hash_pass, (err, result) => {
                        if(result) {
                            res.status(200).send({
                                accountType: 'professor',
                                account: user,
                            }); 
                        }
                    });
                }  
            })

        }
    })
}