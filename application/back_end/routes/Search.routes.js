const sql = require("../models/db.js");

module.exports = app => {
    // search 
    app.get("/search/:filter/text/:text", (req, res) => {
        let search_param = req.params.filter;
        let search_text = req.params.text; 

        if(search_text.length > 1) {
            search_text = search_text.split(" ")[0];
        }

        if(search_param == 'default' && search_text == "default") {
            sql.query('SELECT * FROM student', (err, data) => {
                if(err) {
                    console.log("error: ", err);
                    res.status(500).send({
                        message: 
                            err.message || "Some error occured while signin in."
                    })
                }
                else {
                    console.log(data);
                    res.status(200).send(data); 
                }
            }) 
        }
        else if(search_param == 'default') {
            sql.query(`SELECT * 
                       FROM student 
                       WHERE email LIKE '%${search_text}%' 
                       OR password LIKE '%${search_text}%'
                       OR studentSFSUId LIKE '%${search_text}%'
                       OR firstName LIKE '%${search_text}%'
                       OR lastName LIKE '%${search_text}%'
                       OR addressId LIKE '%${search_text}%'
                       OR resume LIKE '%${search_text}%'
                       OR ethnicity LIKE '%${search_text}%'
                       OR major LIKE '%${search_text}%'
                       OR gender  LIKE '%${search_text}%'
                       OR aggregateRating LIKE '%${search_text}%'
                       OR veteranStatus LIKE '%${search_text}%'
                       OR lgbtqStatus LIKE '%${search_text}%'
                       OR financialAidStatus LIKE '%${search_text}%'
                       OR disabilityStatus LIKE '%${search_text}%'
                       OR firstGeneration LIKE '%${search_text}%'
                       `, (err, data) => {
                            if(err) {
                                console.log("error: ", err);
                                res.status(500).send({
                                    message: 
                                        err.message || "Some error occured while signin in."
                                })
                            }
                            else {
                                console.log(data);
                                res.status(200).send(data); 
                            }
                        })
        } 
        
        //options for gender contain similar substrings, and must be handled  
        else if(search_param =='gender'){
            sql.query(`SELECT * FROM student WHERE ${search_param} LIKE "${search_text}%"`, (err, data) => {
                if(err) {
                    console.log("error: ", err);
                    res.status(500).send({
                        message: 
                            err.message || "Some error occured while signin in."
                    })
                }
                else {
                    console.log(data);
                    res.status(200).send(data); 
                }
            })
                
        }

        else {
            sql.query(`SELECT * FROM student WHERE ${search_param} LIKE "%${search_text}%"`, (err, data) => {
                if(err) {
                    console.log("error: ", err);
                    res.status(500).send({
                        message: 
                            err.message || "Some error occured while signin in."
                    })
                }
                else {
                    console.log(data);
                    res.status(200).send(data); 
                }
            })
        }
    })
}
