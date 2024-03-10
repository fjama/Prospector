const sql = require("../models/db.js");

module.exports = app => {
    // return matches 
    // if student matches with any saved search 
    app.post("/getmatches", (req, res) => {
        let { userId } = req.body; 

        sql.query(`SELECT * 
            FROM student 
            WHERE userId LIKE '%${userId}%'
            `, (err, data) => {
                if(err) {
                    console.log("error: ", err);
                    res.status(500).send({
                        message: 
                            err.message || "Some error occured while trying to find a match."
                    })
                }

                sql.query(`SELECT * 
                    FROM recruiter_savedSearch 
                    WHERE textContent='%${data.major}%' 
                    OR textContent='%${data.ethnicity}%'
                    OR textContent='%${data.gender}%'
                    OR (dropDownOption='veteranStatus' AND textContent='${data.veteranStatus}')
                    OR (dropDownOption='lgbtqStatus' AND textContent='${data.lgbtqStatus}')
                    OR (dropDownOption='financialAidStatus' AND textContent='${data.financialAidStatus}')   
                    OR (dropDownOption='firstGeneration' AND textContent='${data.firstGeneration}')
                    OR (dropDownOption='disabilityStatus' AND textContent='${data.disabilityStatus}')
                    `, (err, data) => {
                        if(err) {
                            console.log("error: ", err);
                            res.status(500).send({
                                message: 
                                    err.message || "Some error occured while trying to find a match."
                            })
                        }

                        res.status(200).send(data);
                    })
        })
    })
}