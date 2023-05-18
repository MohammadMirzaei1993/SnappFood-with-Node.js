const express = require('express');
const router = express.Router()
const userController = require('../controller/userController');
const { chekTokn } = require('../validation/chekLoging');
const { upload } = require('../modules/multer');
const { fileValidation } = require('../validation/fileValidation');


router.post('/signup', userController.singup)

router.post("/loging", userController.loging)

router.post('/change-profile', chekTokn, userController.changeProfile)

router.post('/change-password', chekTokn, userController.changePassword)

router.post('/upload-avatar', chekTokn, upload.single('avatar'), fileValidation, userController.saveimage, (req, res, next) => {
    console.log(req.file)

})

router.get('/get-profile', chekTokn, userController.getProfile)

router.delete("/delete-acount", chekTokn, userController.deletAcont)

router.get('/', userController.getUsers)

router.get('/:id', userController.getUser)

module.exports = router
