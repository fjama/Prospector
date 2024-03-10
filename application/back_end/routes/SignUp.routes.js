module.exports = app => {
    const ProfessorSignUp = require('../controllers/ProfessorSignUp.controller');
    const RecruiterSignUp = require('../controllers/RecruiterSignUp.controller');
    const StudentSignUp = require('../controllers/StudentSignUp.controller'); 

    // create a new professor account 
    app.post("/signUp/professor", ProfessorSignUp.create);

    // create a new recruiter account 
    app.post("/signUp/recruiter", RecruiterSignUp.create);

    // create a new student account 
    // https://bezkoder.com/node-js-upload-image-mysql/
    app.post("/signUp/student", StudentSignUp.create);
}