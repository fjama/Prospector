const express = require('express');
const cors = require('cors');

const db = require('./models/index');

const app = express();

const PORT = process.env.PORT || 5000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello from server!",
    });
})

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

require('./routes/SignIn.routes.js')(app);
require('./routes/SignUp.routes')(app);
require('./routes/Search.routes.js')(app);
require('./routes/Resume.routes.js')(app);
require('./routes/AddRecommendation.routes.js')(app);
require('./routes/SearchStudent.routes.js')(app);
require('./routes/SavedSearch.routes.js')(app);
require('./routes/Recruiter.routes.js')(app);
require('./routes/Professor.routes.js')(app);
require('./routes/Student.routes.js')(app);
require('./routes/GetMatches.routes.js')(app);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
