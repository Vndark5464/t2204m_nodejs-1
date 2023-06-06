const Cart = require("./../models/cart");
exports.addtoCart = (req,res)=>{
    const{name,price,quantity} = req.body;

    const newItem = {
        name,
        price,
        quantity,
      };
    
      // Add item to cart
      Cart.addItem(newItem);
    
      res.redirect("/cart");
};