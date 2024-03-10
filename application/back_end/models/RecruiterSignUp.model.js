const sql = require("./db");

// constructor
const RecruiterAccount = function(RecruiterAccount) {
    this.email = RecruiterAccount.email; 
    this.password = RecruiterAccount.password; 
    this.companyName = RecruiterAccount.companyName; 
    this.description = RecruiterAccount.description; 
    this.addressId = RecruiterAccount.addressId;
    this.websiteLink = RecruiterAccount.websiteLink; 
}

// create new Professor account 
RecruiterAccount.create = (newRecruiterAccount, result) => {
    sql.query("INSERT INTO recruiter SET ?", newRecruiterAccount, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Recruiter account: ", { id: res.insertId, ...newRecruiterAccount });
        result(null, { id: res.insertId, ...newRecruiterAccount });
    });
};

module.exports = RecruiterAccount;