import multer from 'multer';//used for handling file uploads etc multipart/form-data

//Tells the multer to store files on the disk while keeping it original name
const storage=multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)//callback sends no error
    }
})
//upload handler
const upload=multer({
    storage
})

export default upload;