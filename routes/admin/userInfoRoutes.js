const express = require('express');
const router = express.Router();
const UserInfoControllers = require('../../controllers/admin/userInfoControllers');



router.get('/userInfoRead', UserInfoControllers.getAll);
router.get('/userInfo/create', UserInfoControllers.InfoCreate_get);
router.post('/userInfo/create', UserInfoControllers.InfoCreate_post);
router.get('/userInfo/delete/:id', UserInfoControllers.InfoDelete);
router.get('/userInfo/edit/:id', UserInfoControllers.InfoEdit);
router.post('/userInfo/edit/:id', UserInfoControllers.InfoEditPost);



module.exports = router;