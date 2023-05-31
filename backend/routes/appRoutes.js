const { Router } = require('express')
const appController = require('../controller/appController');
const requireAuth = require('../middleware/requireAuth');
const router = Router();

router.post('/submit', appController.dealer_post);
router.post('/service', appController.service_post);
router.post('/signup',appController.signup_post);
router.post('/login',appController.login_post);

module.exports = router;