const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

let cors = require('cors');

const path = require("path");

const fs = require('fs');

const fsExtra = require('fs-extra');

const multer = require("multer");

const app = express();

app.use( express.static( 'public'))

app.use( cors() );

app.use(express.json())

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



app.delete("/remove-image/:image", async (req, resp)=>{


    console.log(req.params.image)
    // remove the image

    let filePath = `./public/portfolio/images/${req.params.image}`;

    if( await fs.existsSync(filePath) ){

        fs.unlinkSync(filePath);

    }

    resp.status(200).send("image removed");

} )

app.delete("/remove-files", async (req, resp)=>{


    let imageDir = `./public/portfolio/images`;
    let mediaDir = `./public/portfolio/media`; // without backslash

    const imageFiles = await fs.readdirSync(imageDir);
    const mediaFiles = await fs.readdirSync(mediaDir);

    // remove files from image folder
    for( const file of imageFiles ){

        if( file !== "default.jpeg" ){

            fs.unlinkSync(`./public/portfolio/images/${file}`);

        }

    }

    // remove all files from /media
    await fsExtra.emptyDirSync(mediaDir);


    resp.status(200).send("files removed");

} )





let AdmZip = require('adm-zip');

app.get('/template-zip-folder', async function(req, resp) {

    let zip = new AdmZip();
    // add local file
    await zip.addLocalFolder("./public/portfolio", 'portfolio');

    await zip.writeZip('portfolio.zip');


    resp.setHeader('Content-disposition', 'attachment; filename=portfolio.zip');
    resp.setHeader('Content-type', 'application/zip');


    console.log('downloading file')
    // resp.download('./design.txt')
    resp.download('./portfolio.zip',  (err) => {
        if(err) {
            console.log(err);
        }
    });



    // reset the html file
    await fs.readFile('./public/html/templateCopy.html','utf-8', async (err, result)=>{

        if(err){
            console.log(err);
            return;
        }

        const textFile = result; // result of the file


        await fs.writeFile('./public/portfolio/template.html', textFile, (err, result)=>{

            console.log("resetting html file")
            if(err){
                console.log(err);
            }
            // console.log(result);
        });

    })

    // remove all files from /images
    fs.readdir('./public/portfolio/images', (err, files) => {
        if (err) throw err;

        for (const file of files) {

            if( file !== "default.jpeg" ){ // remove all except the default image
                fs.unlink(path.join('./public/portfolio/images', file), err => {
                    if (err) throw err;
                });
            }

        }
    });

    // remove all files from /media
    await fsExtra.emptyDirSync('./public/portfolio/media');


    // remove the zip file
    let filePath = `./portfolio.zip`;

    if( fs.existsSync(filePath) ){
        // fs.unlinkSync(filePath);
    }
});


app.post('/html-content', async (req, resp) => {


    // save content to html file
    await fs.writeFile('./public/portfolio/template.html',
        `
    <!DOCTYPE html>
    <html lang="en" id="html">
        ${req.body.html}
    </html>
    `, (err, result)=>{

            console.log("writing to html file")
            if(err){

                resp.json({success:"no"})

                console.log(err);

            }
            // console.log(result);
        });

    resp.json({success:"yes"})


});





app.get("/create-template/*", (req, resp)=>{

    resp.redirect('/create-template');
})

app.get("/create-template", (req, resp)=>{

    resp.sendFile( path.resolve( __dirname, './public/createTemplate.html') );

})

app.listen(process.env.PORT, ()=>{

    console.log(`server running on port `, process.env.PORT )
} )