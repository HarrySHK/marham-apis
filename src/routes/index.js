const { Router } = require('express');
const router = Router();

const { get_doctors, post_doctors,get_users,post_users } = require('../controllers/index.controller')


router.get('/get_docs', get_doctors);
router.post('/post_doc', post_doctors);


router.get('/get_users', get_users);
router.post('/post_user', post_users);

module.exports = router;