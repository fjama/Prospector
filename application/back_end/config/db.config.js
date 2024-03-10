// SERVER DB CREDENTIALS 
module.exports = {
    dbHOST: "localhost",
    dbNAME: "csc648Team2",
    dbUSER: "ubuntu",
    dbPASS: "Csc648Team2!",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

// // FRONT_END DB CREDENTIALS 
// module.exports = {
//     dbHOST: "localhost",
//     dbNAME: "csc648Team2",
//     dbUSER: "root",
//     dbPASS: "",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// }

// BACK_END DB CREDENTIALS 
// module.exports = {
//   dbHOST: "localhost",
//   dbNAME: "csc648Team2",
//   dbUSER: "root", 
//   dbPASS: "bdl4life",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// }