const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(400).end();
});

module.exports = router;
