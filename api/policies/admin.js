/**
 * Allow any authenticated user.
 */
module.exports = function (req, res, next) {

console.log("Admin Policies called.............."+JSON.stringify(req.body.userMailId));

User.find({email:JSON.stringify(req.body.userMailId)}).exec(function (err, user){
  if (err) {
    return res.json({
      "message": "User Not found",
      statusCode:400
    });
  }
  console.log("USER ::: "+JSON.stringify(user));
  if(user.isAdmin==true){
    next();
  }else{
    res.json({
      "message": "You are not admin",
      statusCode:400
    });
  }
});
    // User
    // .findOne({
    //   email: req.body.userMailId
    // })
    // .then(function(user) {
    //   if(user.isAdmin==true){
    //     next();
    //   }else{
    //     res.json({
    //       "message": "You are not admin",
    //       statusCode:400
    //     });
    //   }
    // })
    // .catch(function(err) {
    //   res.json({
    //     "message": "User Not found",
    //     statusCode:400
    //   });
    // });

};
