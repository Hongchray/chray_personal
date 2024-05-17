const express = require('express');
const router = express.Router();
const titleControllers = require('../../controllers/admin/titleControllers');

router.get('/titleRead', titleControllers.getAll);
router.get('/title/create', titleControllers.create_get);
router.post('/title/create', titleControllers.create_post);
router.get('/title/delete/:id', titleControllers.deleteTitle);
router.get('/title/edit/:id', titleControllers.editTitle);
router.post('/title/edit/:id', titleControllers.editTitlePost);


module.exports = router;