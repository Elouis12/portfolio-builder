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

    console.log('uploaded resume')
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


    // GIT/HEROKU DOES NOT TAKE EMPTY DIRECTORIES AS IN THE CASE WITH '/media'
    // SO WE CAN CHECK IF IT EXISTS AND IF NOT THEN CREATE IT
    try{

        // returns error or not
        await fs.access("./public/portfolio/media", async function(error) {

            // create the directory
            if (error) {

                // second parameter is for nested folders?
                await fs.mkdirSync('./public/portfolio/media',  { recursive: true });

            } else {

                console.log("Directory exists.")
            }
        })

    }catch (e){

        console.log('directory does not exists')

    }

    // remove files
    let imageDir = path.join(__dirname, `/public/portfolio/images`);
    let mediaDir = path.join(__dirname, `/public/portfolio/media`); // without backslash

    try{

        const imageFiles = await fs.readdirSync(imageDir);
        const mediaFiles = await fs.readdirSync(mediaDir);


        // remove files from image folder
        for( const file of imageFiles ){

            if( file && file !== "default.jpeg" ){

                fs.unlinkSync(`./public/portfolio/images/${file}`);

            }

        }

        // remove all files from /media
        for( const file of mediaFiles ){

            if( file ){

                fs.unlinkSync(`./public/portfolio/media/${file}`);

                console.log('removing resume')
            }

        }


        // remove all files from /media
        // await fsExtra.emptyDirSync(mediaDir);


    }catch (e) {

        console.log(e)
    }



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

    resp.download('./portfolio.zip',  (err) => {
        if(err) {
            console.log(err);
        }

        // previously has the code below outside of this callback
        // that's why I was getting an error because it was
        // removing the zip before it could finish downloading

        // remove the zip file
        let filePath = path.join(__dirname, `/portfolio.zip`);

        if( fs.existsSync(filePath) ){
            console.log("portfolio exists")

            fs.unlinkSync(filePath);
        }
    });



    // reset the html file
    await fs.readFile('./public/html/templateCopy.html','utf-8', async (err, result)=>{

        if(err){
            console.log(err);
            return;
        }

        const textFile = result; // result of the file


        await fs.writeFile('./public/portfolio/index.html', textFile, (err, result)=>{

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



});


app.post('/html-content', async (req, resp) => {


    // save content to html file
    await fs.writeFile(
        './public/portfolio/index.html',
        req.body.html,
        (err, result)=>{

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



/*app.get("*", (req,resp)=>{

    resp.redirect('/create-template');
})*/


app.listen(process.env.PORT, ()=>{

    console.log(`server running on port `, process.env.PORT )
} )