const { Router } = require('express')
const appController = require('../controller/appController');
const requireAuth = require('../middleware/requireAuth');
const router = Router();

router.post('/submit', requireAuth, appController.dealer_post);
router.post('/service', requireAuth, appController.service_post);
router.post('/signup', appController.signup_post);
router.post('/login', appController.login_post);
router.get('/dealer/list', requireAuth, appController.dealer_list);
router.get('/customer/list', requireAuth, appController.customer_list);
router.get('/logout', appController.logout);
router.get('/loggedIn', appController.loggedIn);

module.exports = router;