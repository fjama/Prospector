const sql = require("../models/db.js");
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const StudentAccount = require('../models/StudentSignUp.model');

const saltRounds = 10; // hash password salt 
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'caotrung6@gmail.com',
      pass: '@bdl4life'
    }
});

function checkMatch(student) { 
    // console.log("from function:", student.email);
    console.log("BEFORE EMAIL in function"); 

    // cross check with recruiter_savedSearch 
    sql.query(`SELECT * 
                FROM recruiter_savedSearch 
                WHERE textContent='%${student.major}%' 
                OR textContent='%${student.ethnicity}%'
                OR textContent='%${student.gender}%'
                OR (dropDownOption='veteranStatus' AND textContent='${student.veteranStatus}')
                OR (dropDownOption='lgbtqStatus' AND textContent='${student.lgbtqStatus}')
                OR (dropDownOption='financialAidStatus' AND textContent='${student.financialAidStatus}')   
                OR (dropDownOption='firstGeneration' AND textContent='${student.firstGeneration}')
                OR (dropDownOption='disabilityStatus' AND textContent='${student.disabilityStatus}')
                `, (err, data) => {
                    if(err) {
                        console.log("error: ", err);
                        res.status(500).send({
                            message: 
                                err.message || "Some error occured while trying to find a match."
                        })
                    }
                    // console.log(data);
                    // get IDs of recruiter who saved the searchs
                    let recruiterIds = [];
                    data.forEach(e => recruiterIds.push(e.recruiterUserId)); 
                    // if this student matches any saved searches 
                    // send email notification to recruiter and student
                    sql.query(`SELECT * FROM recruiter WHERE userId IN (${recruiterIds})`, (err, data2) => {
                        if(err) {
                            console.log("error: ", err);
                            res.status(500).send({
                                message: 
                                    err.message || "Some error occured while trying to find a match."
                            })
                        }
                        // console.log(data);
                        // get emails of recruiters 
                        let recruiterEmails = []; 
                        data2.forEach(e => recruiterEmails.push(e.email)); 
                        let mailList = recruiterEmails.join();
                        
                        let mailOptions = {
                            from: 'caotrung6@gmail.com',
                            to: mailList,
                            subject: 'You\'ve got a match!',
                            text: 'Congratulations! we found a candidate that matches with your saved search!'
                        };

                        transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Email sent to recruiter: ' + info.response);
                            }
                        });
                    })
                    
                    // send email to student
                    let mailOptions = {
                        from: 'caotrung6@gmail.com',
                        to: student.email,
                        subject: 'You\'ve got a match!',
                        text: 'Congratulations! you have matched with a company!'
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.log(error);
                        } else {
                          console.log('Email sent to student: ' + info.response);
                        }
                    });

                    console.log("AFTER EMAIL in function"); 
                })
        
}

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    let { email, password, studentSFSUId, firstName, lastName, addressId, ethnicity, major, 
        gender, veteranStatus, lgbtqStatus, financialAidStatus, disabilityStatus, firstGeneration } = req.body;

    // default starting aggregateRating; will recompute as recommendations come in
    let aggregateRating = 0;

    // validate email format 
    if(emailRegexp.test(email)) {
        
        // encrypt original password
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

            // Create a new student account 
            const student = new StudentAccount({ email, password, studentSFSUId, firstName, lastName, addressId, 
                ethnicity, major, gender, aggregateRating, veteranStatus, lgbtqStatus, financialAidStatus, 
                disabilityStatus, firstGeneration });

            // Save student in the database
            StudentAccount.create(student, (err, data) => {
                if (err)
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating a new account."
                    });
                else {
                    console.log("before function called.")
                    checkMatch(student); 
                    console.log("after function called.")
                    res.send(data);
                }
            });
        });
    }
}