const express = require("express");
const router = express.Router();

const cartController = require("./../controllers/cart.controller");

router.post("cart/add-cart",cartController.addtoCart);
module.exports  = router;