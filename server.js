const express = require("express");

const app = express();
const dotenv = require("dotenv");


let cors = require('cors');

const path = require("path");

const fs = require('fs');

const fsExtra = require('fs-extra');

const multer = require("multer");

const mysql = require("mysql");
const mysql2 = require("mysql2");

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use( express.static( 'public'))


dotenv.config();
app.use( cors() );



const db = mysql2.createPool/*mysql.createConnection*/( {

    connectionLimit : 1,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
} );


// console.log(process.env.DATABASE)


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




/* .single(NAME) NAME is the name we gave it in the front end*/
app.post("/upload-resume", uploadResume.single('resume'), (req, resp)=>{


    resp.status(200).send("resume uploaded");

    console.log('uploaded resume')
} )



app.post("/upload-project-images", uploadProjectImages.single('project-image'), (req, resp)=>{


    resp.status(200).send("project images uploaded");

} )


app.post('/store-icon-image', (req, resp)=>{


    let imageSRC = req.body.imageSRC;

    let srcImagePath = './public/images/icons/'+imageSRC;
    let destImagePath = './public/portfolio/images/icons/'+imageSRC;

    console.log(req.body)
    console.log(srcImagePath)
    console.log(destImagePath)
    fs.copyFileSync( srcImagePath, destImagePath )

    resp.status(200).send("icon image uploaded");

})


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

            }
        })

    }catch (e){

        console.log('directory does not exists')

    }

    // remove files
    let imageDir = path.join(__dirname, `/public/portfolio/images`);
    let mediaDir = path.join(__dirname, `/public/portfolio/media`); // without backslash
    let iconDir = path.join(__dirname, `/public/portfolio/images/icons`); // without backslash

    try{

        const imageFiles = await fs.readdirSync(imageDir);
        const mediaFiles = await fs.readdirSync(mediaDir);
        const iconFiles = await fs.readdirSync(iconDir);


        // remove files from image folder
        for( const file of imageFiles ){



            if(
                file &&
                (
                    file !== "default.jpeg"  // in case we ever want to just use jpeg for image
                          &&
                    file !== "default.gif"  // in case we ever want to just use gif for image
                         &&
                    file !== "icons"  // in case we ever want to just use gif for image
                )

            ){

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

        // remove all files from /icons
        for( const file of iconFiles ){

            if(
                file !== "resume.png"
                        &&
                file !== "user-female-1.png"
                        &&
                file !== "about-me.png"
                        &&
                file !== "contacts.png"
                        &&
                file !== "experience.png"
                        &&
                file !== "footer.png"
                        &&
                file !== "navigation.png"
                        &&
                file !== "portfolio.png"
                        &&
                file !== "navigation.png"
                        &&
                file !== "projects.png"
                        &&
                file !== "skills.png"
                        &&
                file !== "day.png"
                        &&
                file !== "night.png"


            ){

                fs.unlinkSync(`./public/portfolio/images/icons/${file}`);

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

            if(
                file &&
                (
                    file !== "default.jpeg"  // in case we ever want to just use jpeg for image
                            &&
                    file !== "default.gif"  // in case we ever want to just use gif for image
                            &&
                    file !== "icons"  // folders can't be unlinked
                )

            ){ // remove all except the default image
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





/*
app.get("/create-portfolio/", (req, resp)=>{

    resp.redirect('/create-portfolio');
})
*/

app.get("/create-portfolio", (req, resp)=>{

    resp.sendFile( path.resolve( __dirname, './public/CreatePortfolio.html') );

})


app.get('/get-likes', (req, resp)=>{

    console.log("got likes")

    let sql =

        `
            SELECT likes, dislikes FROM likes
        `

    db.query( sql, (err, result) => {

        if( err ){ // if there's an error
            throw err;
        }else{ // if there's no error send us the result AKA query we just made

            resp.json(result);
        }
    } )

})




app.post('/update-likes', (req, resp)=>{


    console.log("updated likes")
    let like = req.body.newLike;

    let sql =

        `
            UPDATE likes SET likes = ${like} WHERE id = 4
        `

    db.query( sql, (err, result) => {

        if( err ){ // if there's an error
            throw err;
        }else{ // if there's no error send us the result AKA query we just made

            resp.json(like);
        }
    } )

})


app.post('/update-dislikes', (req, resp)=>{

    console.log("updated dislikes")

    let dislike = req.body.newDislike;

    let sql =

        `
            UPDATE likes SET dislikes = ${dislike} WHERE id = 4
        `

    db.query( sql, (err, result) => {

        if( err ){ // if there's an error
            throw err;
        }else{ // if there's no error send us the result AKA query we just made

            resp.json(dislike);

        }
    } )

})

app.post("/likes",(req, resp)=>{

    resp.json({hey:"hey"})
})
app.use("*", (req,resp)=>{

    resp.redirect('/404.html');
    // resp.sendFile( path.resolve( __dirname, './public/404.html') );
})




app.listen(process.env.PORT, ()=>{

    console.log(`server running on port `, process.env.PORT )

    console.log('connected to db @ ' + process.env.HOST )

} )