const router = require('express').Router();
const mongoose = require('mongoose');
let WishList = require('../models/wishlist.model');


router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    

    const newWishItem = new WishList({ 
      name,
     price,
     category,
    });

    newWishItem.save()
    .then(()=> res.json('Wish Item Added!'))
    .catch(err => res.status(400).json('Error: '+ err));
})


router.route('/').get((req, res) => {
    WishList.find()
      .then(wishList => res.json(wishList))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/:id').delete((req, res) => {
    WishList.findByIdAndDelete(req.params.id)
      .then(() => res.json('WishList Item deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;