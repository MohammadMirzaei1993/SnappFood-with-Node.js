const fs = require('fs');
const path = require('path');

const fileValidation = (req,res,next)=>{
try {
    const image = req.file
    const type = image.mimetype.split("/")[1]
    const size = image.size
    const Path = image.path.replaceAll("\\","/")
    console.log(image,type,size,Path)
    if(size > 5 * 1024){
        console.log("too larg")
        fs.unlinkSync(req.file.path)
    }
    if(!["jpg","png","jpeg","gif"].includes(type)){
        fs.unlinkSync(req.file.path)
    }
    next()
} catch (error) {
    next({message:error.message , status :400})
}

}
module.exports = {fileValidation}