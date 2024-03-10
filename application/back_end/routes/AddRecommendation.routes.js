const sql = require("../models/db.js");

module.exports = app => {
    app.post("/addrec", (req, res) => {
        let { studentSFSUId, professorId, rating, recommendationText } = req.body; 

        let recommendation = {
            studentSFSUId, professorId, rating, recommendationText
        }

        sql.query("INSERT INTO recommendation SET ?", recommendation, (err, data) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while adding recomendations."
                })
            }
    
            console.log("Recommendation created: ", data);
            res.status(200).send(data);
        })
 
        sql.query(`SELECT * FROM recommendation WHERE studentSFSUId=${studentSFSUId}`, (err, data) => {
            let temp = 0; 
            data.forEach(e => {
                temp += e.rating; 
            });

            let averageRating = Math.round(temp*1.0/data.length);

            sql.query(`UPDATE student SET aggregateRating=${averageRating} WHERE studentSFSUId=${studentSFSUId}`, (err, data) => {
                console.log(data);
            })
        })
    })
}