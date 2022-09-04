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





let AdmZip = require('adm-zip');

app.post('/template-zip-folder', function(req, resp) {
    let zip = new AdmZip();
    // add local file
    zip.addLocalFolder("./public/portfolio", 'portfolio');
    // get everything as a buffer
    // var zipFileContents = zip.toBuffer();

    // zip.writeZip('portfolio.zip');
    fs.writeFileSync('output.zip', zip.toBuffer());
/*    const fileName = 'uploads.zip';
    const fileType = 'application/zip';

    resp.writeHead(200, {
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Type': fileType,
    })*/

    // return resp.end(zipFileContents);


    // zip.writeZip('portfolio.zip');

/*    resp.set('Content-Type','application/octet-stream');
    resp.set('Content-Disposition',`attachment; filename=portfolio.zip`);
    resp.set('Content-Length',zip.toBuffer().length);

    resp.download('./portfolio.zip')*/
    // resp.send(zip.toBuffer());

    // resp.status(200).send( zip );
    // resp.status(200).send( fs );


    // create read steam for the pdf
    const rs = fs.createReadStream("./portfolio.zip");

    // set response header: Content-Disposition
    resp.setHeader("Content-Disposition", "attachment; portfolio.zip");

    // pipe the read stream to the Response object
    rs.pipe(resp);

});






app.use("/create-template", (req, resp)=>{

    resp.sendFile( path.resolve( __dirname, './public/createTemplate.html') );

})

app.listen(process.env.PORT, ()=>{

    console.log(`server running on port `, process.env.PORT )
} )