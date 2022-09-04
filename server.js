const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

let cors = require('cors');

const path = require("path");

const fs = require('fs');

const multer = require("multer");

const app = express();

app.use( express.static( "./public" ))

app.use( cors() );

// where we store, name of file, duplicate files, etc pretty much handle the logics
const storeResume = multer.diskStorage(
    {

        destination: (req, file, cb) => {

            cb(null, './public/portfolio/media');
        },

        // differentiate same file ( use date uploaded with name of file )
        filename: (req, file, cb) => {

            cb(null, 'resume.pdf'/*file.fieldname + path.extname(file.fieldname)*/ )
        }
    }


)
const storeProjectImages = multer.diskStorage(
    {

        destination: (req, file, cb) => {

            cb(null, './public/portfolio/images');
        },

        // differentiate same file ( use date uploaded with name of file )
        filename: (req, file, cb) => {

            cb(null, file.originalname )
        }
    }


)
const uploadResume = multer({storage : storeResume});//all info pertaining to the storage
const uploadProjectImages = multer({storage : storeProjectImages});//all info pertaining to the storage



app.post("/upload-resume", uploadResume.single('resume'), (req, resp)=>{


    resp.status(200).send("resume uploaded");

} )



app.post("/upload-project-images", uploadProjectImages.single('project-image'), (req, resp)=>{


    resp.status(200).send("project images uploaded");

} )



app.delete("/remove-image/:image", (req, resp)=>{


    console.log(req.params.image)
    // remove the image
    let filePath = `./public/portfolio/images/${req.params.image}`;
    fs.unlinkSync(filePath);

    resp.status(200).send("image removed");

} )











app.use("/create-template", (req, resp)=>{

    resp.sendFile( path.resolve( __dirname, './public/createTemplate.html') );

})

app.listen(process.env.PORT, ()=>{

    console.log(`server running on port `, process.env.PORT )
} )