const Utils = require('../utils');
const Reservation = require('../services/reservation')

// Class for struc data
let reservation = new Reservation()

// initialize all tables in the restaurant.
exports.initialize = async (req, res) => {
  try {
    const { restaurant, tables } = req.body
    let response = reservation.create(restaurant, tables)
    return res.json(Utils.Response(Utils.Code.Success, response));
  } catch (e) {
    return res.json(Utils.Response(Utils.Code.ServiceNotAvailable));
  }
}

// get info in the restaurant.
exports.getInfoRestaurant = async (req, res) => {
  try {
    const { restaurant } = req.body
    let response = reservation.getInfo(restaurant)
    return res.json(Utils.Response(Utils.Code.Success, response));
  } catch (e) {
    return res.json(Utils.Response(Utils.Code.ServiceNotAvailable));
  }
}

// get index table info in the restaurant.
exports.fetchInfoTableRestaurant = async (req, res) => {
  try {
    const { restaurant } = req.body
    let response = reservation.fetchTableAvailable(restaurant)
    return res.json(Utils.Response(Utils.Code.Success, response));
  } catch (e) {
    return res.json(Utils.Response(Utils.Code.ServiceNotAvailable));
  }
}

// get list bookid info in the restaurant.
exports.fetchInfoBooking = async (req, res) => {
  try {
    const { restaurant } = req.body
    let response = reservation.fetchBooking(restaurant)
    return res.json(Utils.Response(Utils.Code.Success, response));
  } catch (e) {
    return res.json(Utils.Response(Utils.Code.ServiceNotAvailable));
  }
}

// get info status reservation in the restaurant.
exports.getInfoStatus = async (req, res) => {
  try {
    const { restaurant } = req.body
    let response = reservation.getInfo(restaurant)
    return res.json(Utils.Response(Utils.Code.Success, response));
  } catch (e) {
    return res.json(Utils.Response(Utils.Code.ServiceNotAvailable));
  }
}

// booking tables in restaurant.
exports.reserve = async (req, res) => {
  try {
    const {
      restaurant,
      type,
      adults,
      name,
      email,
      phonenumber,
      date,
    } = req.body
    let response = reservation.reserve(
      restaurant,
      type,
      adults,
      name,
      email,
      phonenumber,
      date,
    )
    return res.json(Utils.Response(Utils.Code.Success, response));
  } catch (e) {
    console.log('e', e)
    return res.json(Utils.Response(Utils.Code.CreateRest));
  }
}

// cancel booking tables in restaurant.
exports.cancel = async (req, res) => {
  try {
    const {
      restaurant,
      bookId,
    } = req.body
    let response = reservation.cancelReserve(
      restaurant,
      bookId,
    )
    return res.json(Utils.Response(Utils.Code.Success, response));
  } catch (e) {
    return res.json(Utils.Response(Utils.Code.CreateRest));
  }
}