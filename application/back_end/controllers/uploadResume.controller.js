const fs = require("fs");

const db = require("../models");
const Image = db.images;

const uploadFiles = async (req, res) => {
  try {
    // console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    const resume = await Image.build({
      type: req.file.mimetype,
      name: req.file.originalname,
      userId: req.body.userId,
      data: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
    })

    fs.writeFileSync(
          __basedir + "/resources/static/assets/tmp/" + req.file.filename
    )

    await resume.save();
    return res.send(`File has been uploaded.`);
    // Image.create({
    //   type: req.file.mimetype,
    //   name: req.file.originalname,
    //   userId: req.body.userId,
    //   data: fs.readFileSync(
    //     __basedir + "/resources/static/assets/uploads/" + req.file.filename
    //   ),
    // }).then((image) => {
    //   fs.writeFileSync(
    //     __basedir + "/resources/static/assets/tmp/" + image.name,
    //     image.data
    //   );  

    //   return res.send(`File has been uploaded.`);
    // });
  } catch (error) {
    // console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};