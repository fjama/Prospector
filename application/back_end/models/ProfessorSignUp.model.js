const sql = require("./db.js");

// constructor
const ProfessorAccount = function(ProfessorAccount) {
    this.email = ProfessorAccount.email;
    this.password = ProfessorAccount.password; 
    this.firstName = ProfessorAccount.firstName; 
    this.lastName = ProfessorAccount.lastName;
    this.university = ProfessorAccount.university;  
}

// create new Professor account 
ProfessorAccount.create = (newProfessorAccount, result) => {
    sql.query("INSERT INTO professor SET ?", newProfessorAccount, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Professor account: ", { id: res.insertId, ...newProfessorAccount });
        result(null, { id: res.insertId, ...newProfessorAccount });
    });
};

module.exports = ProfessorAccount;