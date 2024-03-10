const fs = require("fs");

const db = require("../models");
const Image = db.images;

const updateFiles = async (req, res) => {
  try {
    // console.log(req.file);
    // console.log(req.body.userId)

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    let oldFileObj = await Image.findAll({ 
        where: {
            userId: req.body.userId
        }
    })
    
    let oldFileName = oldFileObj[0].name; 
    // console.log("old from name:", oldFileName);

    Image.update({ 
        type: req.file.mimetype,
        name: req.file.originalname,
        data: fs.readFileSync(__basedir + "/resources/static/assets/uploads/" + req.file.filename)
    }, {
        where: {
            userId: req.body.userId
        }
    }).then((image) => {
        fs.unlinkSync(__basedir + "/resources/static/assets/tmp/" + oldFileName);
        fs.unlinkSync(__basedir + "/resources/static/assets/uploads/" + oldFileName);
        fs.writeFileSync(
            __basedir + "/resources/static/assets/tmp/" + image.name,
            image.data
          );
    
        return res.send(`File has been updated.`);
    })
  } catch (error) {
    // console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  updateFiles,
};