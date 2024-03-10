const sql = require("../models/db.js");
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'caotrung6@gmail.com',
      pass: '@bdl4life'
    }
});

function checkMatch(queryObj) {
    sql.query(`SELECT * 
            FROM student 
            WHERE ${queryObj.dropDownOption} LIKE '%${queryObj.textContent}%'
            `, (err, data) => {
                if(err) {
                    console.log("error: ", err);
                    res.status(500).send({
                        message: 
                            err.message || "Some error occured while trying to find a match."
                    })
                }

                sql.query(`SELECT * FROM recruiter WHERE userId IN (${queryObj.recruiterUserId})`, (err, data2) => {
                    if(err) {
                        console.log("error: ", err);
                        // res.status(500).send({
                        //     message: 
                        //         err.message || "Some error occured while trying to find a match."
                        // })
                    }

                    let mailList = [];
                    data.forEach(e => mailList.push(e.email));
                    data2.forEach(e => mailList.push(e.email))
                    mailList.join()

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
                            console.log('Email sent to recruiter and student: ' + info.response);
                        }
                    });
                })
            }) 
}

module.exports = app => {
    // search 
    app.post("/savesearch/option/:option/text/:text", (req, res) => {
        let save_search_option = req.params.option;
        let save_search_text = req.params.text; 
        let { recruiterId } = req.body; 

        let queryObj = {
            recruiterUserId: recruiterId, 
            textContent: save_search_text,
            dropDownOption: save_search_option
        }

        sql.query("INSERT INTO recruiter_savedSearch SET ?", queryObj, (err, data) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while adding recomendations."
                })
            }
    
            console.log("recruiter_savedSearch created: ", data);
            checkMatch(queryObj); 
            res.status(200).send(data);
        })
        
    })
}