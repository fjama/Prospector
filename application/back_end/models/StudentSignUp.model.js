const sql = require("./db");

// constructor
const StudentAccount = function(StudentAccount) {
    this.email = StudentAccount.email; 
    this.password = StudentAccount.password; 
    this.studentSFSUId = StudentAccount.studentSFSUId; 
    this.firstName = StudentAccount.firstName; 
    this.lastName = StudentAccount.lastName;
    this.addressId = StudentAccount.addressId;
    this.ethnicity = StudentAccount.ethnicity;
    this.major = StudentAccount.major; 
    this.gender = StudentAccount.gender; 
    this.aggregateRating = StudentAccount.aggregateRating; 
    this.veteranStatus = StudentAccount.veteranStatus;
    this.lgbtqStatus = StudentAccount.lgbtqStatus;
    this.financialAidStatus = StudentAccount.financialAidStatus;
    this.disabilityStatus = StudentAccount.disabilityStatus;
    this.firstGeneration = StudentAccount.firstGeneration; 
}

// cross check student info with recruiter saved search table 
// if something matches
// send email to both student and recrutier 

// Nodemailer module 

// create new Student account 
StudentAccount.create = (newStudentAccount, result) => {
    sql.query("INSERT INTO student SET ?", newStudentAccount, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Student account: ", { id: res.insertId, ...newStudentAccount });
        result(null, { id: res.insertId, ...newStudentAccount });
    });
};

module.exports = StudentAccount;