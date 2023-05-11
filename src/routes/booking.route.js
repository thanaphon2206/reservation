const express = require('express');
const controller = require('../controllers/booking.controller');
// const validation = require('../validations/reservation.validation');
const router = express.Router();

router.post('/initialize',  controller.initialize) 
router.post('/reserve',  controller.reserve)
router.post('/cancel',  controller.cancel)
router.post('/info',  controller.getInfoRestaurant)
router.post('/info/book',  controller.fetchInfoBooking)
router.post('/info/table',  controller.fetchInfoTableRestaurant)

module.exports = router;