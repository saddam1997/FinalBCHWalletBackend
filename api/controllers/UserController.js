/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 //External Dependencies.........
var request = require('request');
var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
var mergeJSON = require("merge-json") ;
var validator = require('validator');

//Block.io Details.........
var BlockIo = require('block_io');
var version = 2;
var secreatePin="Saddam1508";
var API_KeyofBlockIo="7ba8-e0ba-8223-7bbe";
var block_io = new BlockIo('7ba8-e0ba-8223-7bbe', 'Saddam1508', version);
var companyBTCAccount="penny.saddam@gmail.com";
var companyBTCAccountAddress="2N4iBd2rsb2JRxn5uDuxH1jr6x3Jn1nSkzB";

//BCH Wallet Details
var bitcoinBCH = require('bitcoin');
var clientBCH = new bitcoinBCH.Client({
  host: 'localhost',
  port: 18332,
  user: 'test',
  pass: 'test123'
});
var companyBCHAccount="pennybch@gmail.com";
var companyBCHAccountAddress="mjnTqHDMoKwkNkdxvwSgxYSKVjkCkFpekG";


module.exports = {

  createNewUserBlockIO: function(req, res) {
    console.log("Enter into createNewUserBlockIO :: ");
    var useremailaddress=req.body.email;
    var userpassword=req.body.password;
    var userconfirmPassword=req.body.confirmPassword;
    var userspendingpassword=req.body.spendingpassword;
    if(!validator.isEmail(useremailaddress)){
      return  res.json({
        "message": "Please Enter valid email id",
        statusCode: 400
      });
    }
    if (!useremailaddress || !userpassword || !userconfirmPassword || !userspendingpassword){
      console.log("User Entered invalid parameter ");
      return  res.json({
        "message": "Invalid Parameter",
        statusCode: 400
      });
    }
    if (userpassword !== userconfirmPassword){
      console.log("Password and confirmPassword doesn\'t match!");
      return res.json({
        "message": 'Password and confirmPassword doesn\'t match!',
        statusCode: 400
      });
    }
    User.findOne({
      email: useremailaddress
    }, function(err, user) {
      if (err) {
        console.log("Error to find user from database");
        return res.json({
          "message":err,
          statusCode: 400
        });
      }
      if (user) {
        console.log("Use email exit and return ");
        return res.json({
          "message": 'email already exit',
          statusCode: 400
        });
      }
      if (!user) {
      block_io.get_new_address({'label': useremailaddress},
        function (error, newCreateAddressDetails) {
          if (error) {
            console.log("Error to create new address from block.io : "+JSON.stringify(error));
            return res.json( {
                "message": newCreateAddressDetails,
                statusCode: 500
              });
          }
          console.log("New address create for user from block.io ::"+newCreateAddressDetails.data.address);
          var userBtcAddresByBlockIO=newCreateAddressDetails.data.address;
              clientBCH.cmd('getnewaddress', useremailaddress, function(err, newBCHAddressForUser, resHeaders) {
                if (err) {
                    console.log("Error to create new address from  BCHServer : "+JSON.stringify(error));
                    return  res.json({
                    "message": err,
                    statusCode:500
                    });
                }
                console.log('New address created from BCHServer :: ', newBCHAddressForUser);
                bcrypt.hash(userspendingpassword, 10, function(err, hashspendingpassword) {
                  if (err) {
                      console.log("Error To bcrypt spendingpassword");
                      return res.json( {
                          "message": err,
                          statusCode:500
                      });
                  }
                  var userObj = {
                    email: useremailaddress,
                    password: userpassword,
                    encryptedSpendingpassword: hashspendingpassword,
                    userBTCAddress: userBtcAddresByBlockIO,
                    userBCHAddress: newBCHAddressForUser
                  }
                  User.create(userObj, function userCreated(err, user) {
                    if (err) {
                      console.log("Error to create new User");
                      return res.json( {
                          "message": err,
                          statusCode:500
                      });
                    }
                    User.publishCreate(user);
                    console.log("User Create Succesfully!!!!");
                    return res.json(200, {
                      user: user,
                      statusCode: 200
                    });
                  });
                });
              });
        });
      }
    });
  },
  sendBTCCoinByUserWithFeeBlockIO: function(req, res, next) {
    console.log("Enter into sendBTCCoinByUserWithFeeBlocIO ");
    var userEmailAddress=req.body.userMailId;
    var userAmountToSend=parseFloat(req.body.amount).toFixed(8);
    var userReceiverBTCAddress=req.body.recieverBTCCoinAddress;
    var userSpendingPassword=req.body.spendingPassword;
    var userCommentForReceiver=req.body.commentForReciever;
    var userCommentForSender=req.body.commentForSender;
    var miniValueOfAmountSentByUser=0.0001;
    miniBTCAmountSentByUser=parseFloat(miniValueOfAmountSentByUser).toFixed(8);

    if(!userEmailAddress ||!userAmountToSend  || !userReceiverBTCAddress||
      !userSpendingPassword||!userCommentForReceiver ||!userCommentForSender){
      console.log("Invalid Parameter by user ");
      return res.json( {"message": "Invalid Parameter",statusCode: 400});
    }

    if (userAmountToSend < miniBTCAmountSentByUser) {
      console.log("Sending amount is not less then 0.0001");
      return res.json( {
        "message": "Sending amount BTC is not less then 0.0001",
        statusCode: 400
      });
    }

    User.findOne({
        email: userEmailAddress
    })
    .then(function(userDetails) {
      var userBTCBalanceInDb=parseFloat(userDetails.BTCbalance).toFixed(8);
        console.log("User BTC balance in database ::: " + userBTCBalanceInDb);
        console.log("User want send BTC to send ::: " + userAmountToSend );
        User.compareSpendingpassword(userSpendingPassword, userDetails,
        function(err, valid) {
          if (err) {
            console.log("Eror To compare password !!!");
            return res.json({"message": err,statusCode: 400});
          }
          if (!valid) {
            console.log("Invalid spendingpassword !!!");
            return res.json( {"message": 'Enter valid spending password',statusCode: 400 });
          } else {
            console.log("Valid spending password !!!");
            var userBTCAddressInDb=userDetails.userBTCAddress;
            if (userAmountToSend > userBTCBalanceInDb) {
              console.log("User BTC balance is Insufficient");
              return res.json({"message": "You have Insufficient BTC balance",statusCode: 400});
            }
            block_io.withdraw_from_addresses(
            {
              'amounts': userAmountToSend,
              'from_addresses': userBTCAddressInDb,
              'to_addresses':  userReceiverBTCAddress,
              'pin': secreatePin
            },
            function (error, withdrawBTCTransactioDetails) {
              if (error){
                console.log("Error from Block.io "+JSON.stringify(withdrawBTCTransactioDetails));
                if(!withdrawBTCTransactioDetails){
                  return res.json({"message": "Error to connect with BTC Server",statusCode: 400});
                }
                return res.json({"message": withdrawBTCTransactioDetails.data.error_message,statusCode: 400});
              }
              var userAmountWithdrawFromBlockIOWithNetworkFee=
              parseFloat(withdrawBTCTransactioDetails.data.amount_withdrawn).toFixed(8);
              var updatedBTCbalance = (parseFloat(userBTCBalanceInDb).toFixed(8) -
              parseFloat(userAmountWithdrawFromBlockIOWithNetworkFee).toFixed(8));
              console.log("userAmountWithdraw with network_fee ::: "+userAmountWithdrawFromBlockIOWithNetworkFee);
              console.log("User Updated Balance :: "+updatedBTCbalance);
              User.update({
                  email: userEmailAddress
                }, {
                  BTCbalance: parseFloat(updatedBTCbalance).toFixed(8)
                })
                .exec(function(err, updatedUser) {
                  if (err) {
                    console.log("Error to update user BTC balance");
                    return res.json( {"message": "Error to update User values",statusCode: 400});
                  }
                  User.findOne({email: userEmailAddress})
                    .then(function(user) {
                      console.log("Return Updated User Details :::  "+JSON.stringify(user));
                      res.json({user: user,statusCode: 200});
                    })
                    .catch(function(err) {
                      console.log("Error  to find User Details with mail ");
                      if (err) {res.json({"message":"Error to find user details",statusCode: 400});
                      }
                    });
                });
            });
          }
        });
    })
    .catch(function(err) {
        console.log("Error  to find User Details with mail "+userEmailAddress);
        return res.json({"message":"User Email id not exit",statusCode: 400});
    });
  },
  sendBCHCoinByUserWithFee: function(req, res, next) {
    console.log("Enter into sendBCHCoinByUserWithFee with ::: " + JSON.stringify(req.body));
    var userEmailAddress=req.body.userMailId;
    var userBCHAmountToSend=parseFloat(req.body.amount).toFixed(8);
    var userReceiverBCHAddress=req.body.recieverBCHCoinAddress;
    var userSpendingPassword=req.body.spendingPassword;
    var userCommentForReceiver=req.body.commentForReciever;
    var userCommentForSender=req.body.commentForSender;
    var minimumAmountBCHSentByUser=0.0001;
    miniBCHAmountSentByUser=parseFloat(minimumAmountBCHSentByUser).toFixed(8);
    if(!userEmailAddress ||!userBCHAmountToSend  || !userReceiverBCHAddress||
      !userSpendingPassword|| !userCommentForReceiver || !userCommentForSender){
          console.log("Invalid Parameter by user!!!");
          return res.json({"message": "Invalid Parameter",statusCode: 400});
    }
    if (userBCHAmountToSend < miniBCHAmountSentByUser) {
      console.log("amount in not less 0.0001 !!!");
      return res.json({"message": "Amount not less than 0.0001 !!!",statusCode: 400});
    }
    User.findOne({
      email: userEmailAddress
    }).exec(function (err, userDetails){
      if (err) {
        return res.json( {"message": "Error to find user",statusCode: 401});
      }
      if (!userDetails) {
        return res.json( {"message": "Invalid email!",statusCode: 401});
      }
      var userBCHBalanceInDb = parseFloat(userDetails.BCHbalance).toFixed(8);
      console.log("UserAMount in database ::: " + userDetails.BCHbalance);
      console.log("req.body.amount ::: " + parseFloat(req.body.amount).toFixed(8));
      if (userBCHAmountToSend > userBCHBalanceInDb){
        console.log("BCH Amount amount Exceed !!!");
        return res.json( {"message": "You have Insufficient BCH balance",statusCode: 400});
      }
      User.compareSpendingpassword(req.body.spendingPassword, userDetails, function(err, valid) {
        if (err){
          console.log("Error to compare password");
          return res.json({"message": err,statusCode: 400});
        }
        if (!valid) {
          console.log("Spending password is invalid !!!");
          return res.json({ "message": "Please enter correct spending password",statusCode: 400});
        } else {
          console.log("Spending password is valid!!!");
          var minimumNumberOfConfirmation=3;
          clientBCH.cmd('sendfrom',userEmailAddress,userReceiverBCHAddress,userBCHAmountToSend,
            minimumNumberOfConfirmation,userCommentForReceiver,userCommentForSender,
            function(err, TransactionDetails, resHeaders) {
              if (err){
                console.log("Error from sendFromBCHAccount:: ");
                if(err.code && err.code== "ECONNREFUSED"){
                    return res.json({"message":"BCH Server Refuse to connect App" ,statusCode: 400});
                }
                if(err.code && err.code== -5){
                    return res.json({"message":"Invalid BCH Address" ,statusCode: 400});
                }
                if(err.code && err.code== -6){
                    return res.json({"message":"Account has Insufficient funds" ,statusCode: 400});
                }
                if(err.code && err.code < 0){
                    return res.json({"message":"Problem in BCH server" ,statusCode: 400});
                }
                return res.json({"message":"Error in BCH Server",statusCode: 400});
              }
              console.log('TransactionDetails :', TransactionDetails);
              console.log("User balance :: " + userDetails.BCHbalance);
              console.log("req.body.amount balance :: " + req.body.amount);
              clientBCH.cmd('gettransaction', TransactionDetails,
                function(err, compleateTransactionDetails, resHeaders) {
                  if (err) {
                    return
                    res.json({
                            "message": err,
                            statusCode: 400
                    });
                  }

                  console.log("Fee :: " + parseFloat(Math.abs(compleateTransactionDetails.fee)).toFixed(8));

                  var updatedBCHbalance = (parseFloat(userDetails.BCHbalance).toFixed(8) -
                    parseFloat(req.body.amount).toFixed(8));
                  updatedBCHbalance = updatedBCHbalance - parseFloat(Math.abs(compleateTransactionDetails.fee)).toFixed(8);

                  User.update({
                      email: req.body.userMailId
                    }, {
                      BCHbalance: updatedBCHbalance
                    })
                    .exec(function(err, updatedUser) {
                      if (err) {
                        return
                        res.json( {
                                "message": err,
                                statusCode: 400
                        });
                      }
                      User
                        .findOne({
                          email: req.body.userMailId
                        })
                        .then(function(user) {
                          console.log("User return "+JSON.stringify(user));
                          res.json({
                            user: user,
                            statusCode: 200
                          });
                        })
                        .catch(function(err) {
                          if (err) {
                            return res.json( {
                                    "message": err,
                                    statusCode: 400
                            });
                          }
                        });
                    });
                });
            });
        }
      });
    });
  },
  sellBCHCoinByUserWithFeeBlockIO: function(req, res, next) {
    console.log("Enter into sellBCHCoinByUserWithFeeBlockIO with ::: " + JSON.stringify(req.body));
    if(!req.body.userMailId ||
      !req.body.buyAmountBTC  ||
      !req.body.buyAmountBCH  ||
      !req.body.spendingPassword||
      !req.body.commentForReciever ||
      !req.body.commentForSender){
      console.log("Invalid Parameter by user.....");
      return
      res.json( {
        "message": "Invalid Parameter",
        statusCode: 400
      });
    }
    if (parseFloat(req.body.buyAmountBCH).toFixed(8) <= 0.0001) {
      console.log("amount in not less the zero............");
      return res.json( {
        "message": "Invalid Parameter",
        statusCode: 400
      });
    }
    User.findOne({
        email: req.body.userMailId
      })
      .exec(function(err, userDetails) {
        if (err) {
          console.log("Error to get userDetails.................");
          return res.json( {
                        "message": err,
                        statusCode: 400
                });
        }
        console.log("UserAMount in database ::: " + userDetails.BCHbalance);
        console.log("req.body.amount ::: " + parseFloat(req.body.amount).toFixed(8));
        if (parseFloat(req.body.buyAmountBCH).toFixed(8) > parseFloat(userDetails.BCHbalance).toFixed(8)) {
          console.log(parseFloat(req.body.buyAmountBCH).toFixed(8) + " Amount Exceed " + userDetails.BCHbalance);
          return
          res.json( {
                  "message": "Amount Exceed",
                  statusCode: 400
          });

        }
        User.compareSpendingpassword(req.body.spendingPassword, userDetails, function(err, valid) {
          if (err) {
            console.log("inside.comparePassword.. findOne.authenticated called.........");
            return
            res.json({
                    "message": err,
                    statusCode: 400
            });

          }
          if (!valid) {
            return
            res.json( {
                    "message": "invalid spendingpassword",
                    statusCode: 400
            });

          } else {
            console.log("User spendingpassword is valid..............." + JSON.stringify(req.body.userMailId));
            //SendFrom for UsermailId to
            clientBCH.cmd('sendfrom',
              req.body.userMailId,
              companyBCHAccountAddress,
              parseFloat(req.body.buyAmountBCH).toFixed(8),
              3,
              req.body.commentForReciever,
              req.body.commentForSender,
              function(err, TransactionBCHTxId, resHeaders) {
                if (err){
                  console.log(err);
                  return  res.json({
                    "message": err,
                    statusCode:500
                  });
                }
                console.log('UserMailid To Company Mailid Succesfully txid : ', TransactionBCHTxId);
                console.log("User BCH balance :: " + userDetails.BCHbalance);
                console.log("Amount send by user :: " + req.body.buyAmountBCH);
                //GetTransaction Fees for BCHTransaction
                clientBCH.cmd('gettransaction', TransactionBCHTxId,
                  function(err, compleateTransactionBCHDetails, resHeaders) {
                    if (err) return  res.json({
                      "message": err,
                      statusCode:500
                    });
                    console.log("Fee :: " + parseFloat(Math.abs(compleateTransactionBCHDetails.fee)).toFixed(8));
                    var updatedBCHbalance = (parseFloat(userDetails.BCHbalance).toFixed(8) - parseFloat(req.body.buyAmountBCH).toFixed(8));
                    updatedBCHbalance = updatedBCHbalance - parseFloat(Math.abs(compleateTransactionBCHDetails.fee)).toFixed(8);
                    //SendFrom for companyBTCAccount to userBTCAddress

                    // var getEstimatedFeeURL="https://block.io/api/v2/get_network_fee_estimate/?api_key="
                    // +API_KeyofBlockIo+"&amounts="
                    // +req.body.amount+"&to_addresses="
                    // +userDetails.userBTCAddress;

                    // request.get({
                    //   url: getEstimatedFeeURL
                    // }, function(error, response, userNetwworkFeesDetails) {
                    //   if (error) {
                    //     sails.log.error(error);
                    //     return res.json(JSON.parse(error));
                    //   }
                    //   else {
                    //     console.log("userNetwworkFeesDetails:  "+JSON.stringify(userNetwworkFeesDetails));
                    //     console.log("userNetwworkFeesDetails.data:  "+JSON.parse(userNetwworkFeesDetails.data));
                    //     console.log("userNetwworkFeesDetails.data.estimated_network_fee:  "+JSON.parse(userNetwworkFeesDetails.data.estimated_network_fee));
                    //     console.log("network_fee:  "+JSON.parse(userNetwworkFeesDetails.data.data.estimated_network_fee));
                    //     return res.json(JSON.parse(userNetwworkFeesDetails));
                    //   }
                    // });

                    block_io.withdraw_from_addresses(
                    {
                      'amounts': parseFloat(req.body.buyAmountBTC).toFixed(8),
                      'from_addresses': companyBTCAccountAddress,
                      'to_addresses':  userDetails.userBTCAddress,
                      'pin': secreatePin
                    },
                    function (error, withdrawTransactioDetails) {

                      if (error) {
                        res.json( {
                                "message": withdrawTransactioDetails,
                                statusCode: 400
                        });
                      }
                      console.log("withdrawTransactioDetails: "+JSON.stringify(withdrawTransactioDetails));
                      console.log("withdrawTransactioDetails.data: "+JSON.stringify(withdrawTransactioDetails.data));
                      console.log("withdrawTransactioDetails.data.txid: "+JSON.stringify(withdrawTransactioDetails.data.txid));
                      console.log("withdrawTransactioDetails.data.network_fee: "+JSON.stringify(withdrawTransactioDetails.data.network_fee));

                      var updatedBTCbalance =
                      (parseFloat(userDetails.BTCbalance) +
                      parseFloat(withdrawTransactioDetails.data.amount_sent)).toFixed(5);
                      User.update({
                          email: req.body.userMailId
                        }, {
                          BTCbalance: parseFloat(updatedBTCbalance).toFixed(8),
                          BCHbalance: parseFloat(updatedBCHbalance).toFixed(8)
                        })
                        .exec(function(err, updatedUser) {
                          if (err) {
                            console.log("Error to udpate .....");
                            return
                            res.json( {
                                    "message": "Invalid Parameter",
                                    statusCode: 400
                            });
                          }
                          //RPC User .................recieverAddress of BTC
                          User
                            .findOne({
                              email: req.body.userMailId
                            })
                            .then(function(user) {
                              console.log("User return "+JSON.stringify(user));
                              res.json({
                                user: user,
                                statusCode: 200
                              });
                            })
                            .catch(function(err) {
                              if (err) {
                                return res.json( {
                                        "message": err,
                                        statusCode: 400
                                });
                              }
                            });
                        });
                    }
                    );
                  });
              });
          }
        });
      });
  },
  buyBCHCoinByUserWithFeeBlockIO: function(req, res, next) {
    console.log("Enter into buyBCHCoinByUserWithFeeBlockIO with ::: " + JSON.stringify(req.body));
    if(!req.body.userMailId
      ||!req.body.buyAmountBTC
      ||!req.body.buyAmountBCH
      ||!req.body.spendingPassword ||!req.body.commentForReciever
      ||!req.body.commentForSender){
      console.log("Invalid Parameter by user.....");
      res.json(400, {
              "message": "Invalid Parameter",
              statusCode: 400
      });
      }
    if (parseFloat(req.body.buyAmountBCH).toFixed(8) <= 0.0001) {
      console.log("amount in not less the zero............");
      return res.json( {
        "message": "Amount not less then 0.0001",
        statusCode: 400
      });
    }
    User.findOne({
        email: req.body.userMailId
      })
      .exec(function(err, userDetails) {
        if (err) {
          console.log("Error to get userDetails.................");
          return res.json( {
                    "message": err,
                    statusCode: 400
            });
        }

        console.log("UserAMount in database ::: " + JSON.stringify(userDetails));
        console.log("req.body.amount ::: " + parseFloat(req.body.buyAmountBCH).toFixed(8));

        if (parseFloat(req.body.buyAmountBTC).toFixed(8) > parseFloat(userDetails.BTCbalance).toFixed(8)) {
          console.log(parseFloat(req.body.buyAmountBCH).toFixed(8) + " Amount Exceed " + userDetails.BCHbalance);
          return res.json( {
                    "message": "Amount Exceed",
                    statusCode: 400
            });
        }
        User.compareSpendingpassword(req.body.spendingPassword, userDetails, function(err, valid) {
          if (err) {
            console.log("Error to Compare SpendingPassword password.........");
            return res.json( {
                      "message": "forbidden",
                      statusCode: 400
              });
          }
          if (!valid) {
            console.log("Invalid Compare SpendingPassword password.........");
            return res.json( {
                      "message": "invalid  spendingpassword",
                      statusCode: 400
            });

          } else {

            console.log("User spendingpassword is valid..............." + JSON.stringify(req.body.userMailId));
            block_io.withdraw_from_addresses(
            {
              'amounts': parseFloat(req.body.buyAmountBTC).toFixed(8),
              'from_addresses': userDetails.userBTCAddress,
              'to_addresses':  companyBTCAccountAddress,
              'pin': secreatePin
            },
            function (error, withdrawTransactioDetails) {
              //if (error) return console.log("Error occured:", error.message);
              if (error) {
                //return console.log("Error occured:", error.message);
                console.log("Err responseBlockIo: "+JSON.stringify(withdrawTransactioDetails));
                return res.json( {
                        "message": withdrawTransactioDetails,
                        statusCode: 400
                });
              }
              console.log("withdrawTransactioDetails Amount: "+JSON.stringify(withdrawTransactioDetails.data.amount_withdrawn));

              var updatedBTCbalance = (parseFloat(userDetails.BTCbalance).toFixed(5) -
              parseFloat(withdrawTransactioDetails.data.amount_withdrawn).toFixed(5));

              clientBCH.cmd('sendfrom',
                companyBCHAccount,
                userDetails.userBCHAddress,
                parseFloat(Math.abs(req.body.buyAmountBCH)).toFixed(8),
                3,
                req.body.commentForReciever,
                req.body.commentForSender,
                function(err, TransactionDetails, resHeaders) {
                  if (err) {
                    console.log(err);
                    return  res.json({
                    "message": err,
                    statusCode:500
                  });
                }
                  console.log('TransactionDetails :', TransactionDetails);
                  console.log("User balance :: " + userDetails.BCHbalance);
                  console.log("req.body.buyAmountBCH balance :: " + req.body.buyAmountBCH);
                  clientBCH.cmd('gettransaction', TransactionDetails,
                    function(err, compleateTransactionDetails, resHeaders) {
                      if (err) return console.log(err);
                      console.log("Fee :: " + parseFloat(Math.abs(compleateTransactionDetails.fee)).toFixed(8));
                      console.log("USERBCH balance beforeUpdate ::: "+userDetails.BCHbalance);
                      var updatedBCHbalance = (parseFloat(userDetails.BCHbalance) + parseFloat(req.body.buyAmountBCH)).toFixed(8);
                      updatedBCHbalance = updatedBCHbalance - parseFloat(Math.abs(compleateTransactionDetails.fee)).toFixed(8);
                      console.log("Update USERBCH balance ::: "+updatedBCHbalance);
                      console.log("Update updatedBTCbalance balance ::: "+updatedBTCbalance);

                      User.update({
                          email: req.body.userMailId
                        }, {
                          BTCbalance: parseFloat(updatedBTCbalance).toFixed(8),
                          BCHbalance: parseFloat(updatedBCHbalance).toFixed(8)
                        })
                        .exec(function(err, updatedUser) {
                          if (err) {
                            res.json({
                              "message": err,
                              statusCode: 400
                            });
                          }
                          //RPC User .................recieverAddress of BTC
                          User
                            .findOne({
                              email: req.body.userMailId
                            })
                            .then(function(user) {
                              console.log("User return "+JSON.stringify(user));
                              res.json({
                                user: user,
                                statusCode: 200
                              });
                            })
                            .catch(function(err) {
                              if (err) {
                                return res.json( {
                                        "message": err,
                                        statusCode: 400
                                });
                              }
                            });
                        });
                    });
                });
            }
            );
          }
        });
      });
  },
  getTransactionListBCH: function(req, res, next) {
    console.log("Enter into getTransactionListBCH::: " + JSON.stringify(req.body));
    if(!req.body.userMailId){
      console.log("Invalid Parameter by user.....");
      return
      res.json({
              "message": "Invalid Parameter",
              statusCode: 400
      });
    }
    User
      .findOne({
        email: req.body.userMailId
      })
      .then(function(user) {

        clientBCH.cmd(
          'listtransactions',
          req.body.userMailId,
          function(err, transactionList) {
            if (err) {
              console.log("Return err.......... "+err);
              return res.json( {
                      "message": err,
                      statusCode: 400
              });
            }
            console.log("Return Transaction List1 :: "+JSON.stringify(transactionList));
            return res.json({
                       "tx": transactionList,
                       statusCode: 200
            });
        });
      })
      .catch(function(err) {

          console.log("Error to find user ........");
          return res.json( {
                  "message": err,
                  statusCode: 400
          });

      });
  },
  getTransactionListSentBlockIO: function(req, res, next) {
    console.log("Enter into getTransactioList::: " + JSON.stringify(req.body));
    if(!req.body.userMailId){
      console.log("Invalid Parameter by user.....");
      return
      res.json({
        "message": "Invalid Parameter",
        statusCode: 400
      });
    }
    User
      .findOne({
        email: req.body.userMailId
      })
      .then(function(user) {
        block_io.get_transactions({'type': 'sent',
        'addresses': user.userBTCAddress
      },
        function(err, transactionDetails) {
          if (err){
            return
            res.json( {
              "message": transactionDetails,
              statusCode: 400
            });
          }
          console.log(JONS.stringify(transactionDetails));
          return res.json( {
                     "tx": transactionDetails,
                     statusCode: 200
          });
        });
      })
      .catch(function(err) {
          console.log("User Details not found.....");
          return res.json( {
                      "message": err,
                      statusCode: 400
              });
      });
  },
  getTransactionListAllBlockIO: function(req, res, next) {
    console.log("Enter into getTransactioList::: " + JSON.stringify(req.body));
    if(!req.body.userMailId){
      console.log("Invalid Parameter by user.....");
      return res.json({
            "message": "Invalid Parameter",
            statusCode: 400
      });
    }
    User
      .findOne({
        email: req.body.userMailId
      })
      .then(function(user) {

        block_io.get_transactions({'type': 'sent',
        'addresses': user.userBTCAddress
        },
        function(err, transactionDetailssent) {
          if (err) {
            return res.json({
                    "message": transactionDetailssent,
                    statusCode: 400
            });
          }
          console.log("Value of responseBlockIo: "+transactionDetailssent);

          block_io.get_transactions({'type': 'received',
          'addresses': user.userBTCAddress
          },
          function(err, transactionDetailsreceived) {
            if (err) {
              res.json( {
                          "message": transactionDetailsreceived,
                          statusCode: 400
                  });
            }
            console.log("Value of responseBlockIo: "+transactionDetailsreceived);
            console.log("transactionDetailssent ::: "+JSON.stringify(transactionDetailssent.data.txs));
            console.log("transactionDetailsreceived \n\n::: "+JSON.stringify(transactionDetailsreceived.data.txs));
            var transactionDetailsAll = mergeJSON.merge(transactionDetailssent.data.txs, transactionDetailsreceived.data.txs) ;
            return res.json({
                       "tx": transactionDetailsAll,
                       statusCode: 200
            });
          });
        });
      })
      .catch(function(err) {
          console.log("User Details not found.....");
          return res.json( {
              "message": err,
              statusCode: 400
            });
      });
  },
  getTransactionListReceivedBlockIO: function(req, res, next) {
    console.log("Enter into getTransactioList::: " + JSON.stringify(req.body));
    if(!req.body.userMailId){
      console.log("Invalid Parameter by user.....");
      return  res.json({
        "message": "Invalid Parameter",
        statusCode: 400
      });

      // return res.json({
      //   "message": "Invalid Parameter"
      // });
    }
    User
      .findOne({
        email: req.body.userMailId
      })
      .then(function(user) {
        console.log("userDetails:: "+JSON.stringify(user));
        block_io.get_transactions({'type': 'received',
        'addresses': user.userBTCAddress
      },
        function(err, transactionDetails) {
          if (err) {
            return  res.json( {
              "message": transactionDetails,
              statusCode: 400
            });
          }
          console.log("Value of responseBlockIo: "+transactionDetails);
          return res.json(200, {
                     "tx": transactionDetails,
                     statusCode: 200
          });
        });
      })
      .catch(function(err) {
          console.log("User Details not found.....");
          return  res.json( {
            "message": "User Details not found",
            statusCode: 400
          });
          // return res.json( {
          //   "message": "User Details not found"
          // });
      });
  },
  getCurrentBalanceBCH: function(req, res, next) {
    console.log("Enter into getTransactioList::: " + JSON.stringify(req.body));
    if(!req.body.userMailId){
      console.log("Invalid Parameter by user.....");
      return res.json( {
        "message": "Invalid Parameter"
      });

    }
    User
      .findOne({
        email: req.body.userMailId
      })
      .then(function(user) {
        console.log("User return "+JSON.stringify(user));
        console.log("UserBCH Balance ::"+user.BCHbalance);
        clientBCH.cmd(
          'getbalance',
          req.body.userMailId,
          function(err, userBCHBalanceFromServer, resHeaders) {
            if (err) return res.json({
              "message": "RPC Server Not Running",
              statusCode:500
            });
            console.log("Return Transaction List :: "+JSON.stringify(userBCHBalanceFromServer));
            if(parseFloat(userBCHBalanceFromServer).toFixed(8)>parseFloat(user.BCHbalance).toFixed(8)){

              console.log("UserBalance Need to update ............");
              User.update({
                  email: req.body.userMailId
                }, {
                  BCHbalance: userBCHBalanceFromServer
                })
                .exec(function(err, updatedUser) {
                  if (err) {
                    return res.serverError(err);
                  }
                  User
                    .findOne({
                      email: req.body.userMailId
                    })
                    .then(function(userUpdated) {
                      console.log("User return "+JSON.stringify(userUpdated));
                      res.json({
                        user: userUpdated,
                        statusCode:200
                      });
                    })
                    .catch(function(err) {
                      if (err) return res.serverError(err);
                    });
                });
            }else {
              res.json({
                "message": "No need to update",
                statusCode:201
              });
            }
          });
      })
      .catch(function(err) {
        if (err) return res.serverError(err);
      });
  },
  getCurrentBalanceBTC: function(req, res, next) {
    console.log("Enter into getTransactioList::: " + JSON.stringify(req.body));
    if(!req.body.userMailId){
      console.log("Invalid Parameter by user.....");
      return res.json(401, {
        "message": "Invalid Parameter"
      });

    }
    User
      .findOne({
        email: req.body.userMailId
      })
      .then(function(user) {
        console.log("User return "+JSON.stringify(user));
        console.log("UserBCH Balance ::"+user.BTCbalance);
        block_io.get_address_balance({'labels': req.body.userMailId},
        function (error, userBalanceDetais) {
          if(error){
            return res.json({
                    "message": userBalanceDetais,
                    statusCode: 500
            });
          }
          console.log("userBalanceDetais.data.available_balance ::: "+userBalanceDetais.data.available_balance);
          var userAvaliableBalanceBTC=userBalanceDetais.data.available_balance;
          if(parseFloat(userAvaliableBalanceBTC).toFixed(8)>parseFloat(user.BTCbalance).toFixed(8)){
            User.update({
                email: req.body.userMailId
              }, {
                BTCbalance: userAvaliableBalanceBTC
              })
              .exec(function(err, updatedUser) {
                if (err) {
                  return res.serverError(err);
                }
                User
                  .findOne({
                    email: req.body.userMailId
                  })
                  .then(function(userUpdated) {
                    console.log("User return "+JSON.stringify(userUpdated));
                    res.json({
                      user: userUpdated,
                      statusCode:200
                    });
                  })
                  .catch(function(err) {
                    if (err) return res.serverError(err);
                  });
              });
          }else {
            res.json({
              "message": "No need to update",
              statusCode:201
            });
          }
          // return res.json(200, {
          //         "data": userBalanceDetais.data,
          //         statusCode: 200
          // });
        });
      })
      .catch(function(err) {
        console.log("Error to find user ........");
        if(err){
        return res.json( {
                "message": "User Details not found",
                statusCode: 400
        });
        }
      });
  },
  sendEmail: function(req, res, next) {
    console.log("Enter into sendEmailTest::: " + JSON.stringify(req.body));
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'wallet.bcc@gmail.com',
        pass: 'boosters@123'
      }
    });
    var mailOptions = {
      from: 'wallet.bcc@gmail.com',
      to: 'bccwalletsuport@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.json(200,"Message Send Succesfully");
      }
    });
  },
  getCurrntPriceOfBTC: function(req, res, next) {
    console.log("Enter Into getCurrntPriceOfBTC.....");
      request.get({
        url: "https://cex.io/api/ticker/BCH/BTC"
      }, function(error, response, currentPRiceDetails) {
        if (error) {
          console.log("Returning current price list.....");
          return  res.json( {
            "message": "Error to get current BCH Price",
            statusCode: 400
          });
        }
        else {
          console.log("Returning current price list.....");
          return  res.json( {
            "currentPrice": JSON.parse(currentPRiceDetails),
            statusCode: 200
          });

        }
      });

  },
  forgotPassword: function(req, res, next) {

    if(!req.body.userMailId){
      console.log("Invalid Parameter by user.....");
      return res.json(401, {
        "message": "Invalid Parameter"
      });
    }
    User
      .findOne({
        email: req.body.userMailId
      })
      .then(function(userDetails) {

        if(!userDetails){
          console.log("error User Details found...error."+JSON.stringify(userDetails));
            return res.json( {
              "message": 'User Mail Id not found',
              statusCode: 401
            });
        }

        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'wallet.bcc@gmail.com',
            pass: 'boosters@123'
          }
        });
        var newCreatedPassword=Math.floor(Math.random() * 10000000000);
        var mailOptions = {
          from: 'wallet.bcc@gmail.com',
          to: req.body.userMailId,
          subject: 'New password of BCH wallet',
          text: 'Hi, \n Your new password of your account is '+newCreatedPassword
        };
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log(newCreatedPassword+'Email sent: ' + info.response);
            //res.json(200,"Message Send Succesfully");
            console.log("createing encryptedPassword ....");
            bcrypt.hash(newCreatedPassword.toString(), 10, function (err, hash) {
              if(err) return next(err);
              var newEncryptedPass = hash;
              User.update({
                  email: req.body.userMailId
                }, {
                  encryptedPassword: newEncryptedPass
                })
                .exec(function(err, updatedUser) {
                  if (err) {
                    return res.serverError(err);
                  }
                  //Call RPC ......
                  console.log("return updated data............");
                  return res.json({
                            "message": "Password sent to your mailid",
                            statusCode: 200
                    });
                });

            });

          }
        });

      })
      .catch(function(err) {
        console.log("catch User Details not found....");
        return res.json( {
          "message": 'User not found',
          statusCode: 400
        });
      });

    //Call RPC For get current balance of BTC
  },
  updatePassword: function(req, res, next) {

    if(!req.body.userMailId ||!req.body.currentPassword||!req.body.newPassword){
      console.log("Invalid Parameter by user.....");
      return res.json( {
        "message": "Invalid Parameter"
      });
    }
    User
      .findOne({
        email: req.body.userMailId
      })
      .then(function(userDetails) {
        if (!userDetails) {
          console.log("inside.comparePassword.. findOne.authenticated called.........");
          return res.json( {
            err: 'User not found'
          });
        }
        User.comparePassword(req.body.currentPassword, userDetails,
          function(err, valid) {
          if (err) {
            console.log("inside.comparePassword.. findOne.authenticated called.........");
            return res.json( {
              err: 'Error currentpassword'
            });
          }
          if (!valid) {
            return res.json( {
              err: 'Please enter correct password'
            });
          } else {
            console.log("User currentpassword is valid...............");
            bcrypt.hash(req.body.newPassword, 10, function (err, hash) {
              if(err) return next(err);

              User.update({
                  email: req.body.userMailId
                }, {
                  encryptedPassword: hash
                })
                .exec(function(err, updatedUser) {
                  if (err) {
                    return res.serverError(err);
                  }
                  //Call RPC ......
                  console.log("return updated data............");
                  return res.json({
                    "updatedUser": updatedUser,
                    statusCode: 200
                  });
                });
            });
          }
        });
      })
      .catch(function(err) {
        return res.json( {
          "message": err,
          statusCode: 400
        });

      });
    //Call RPC For get current balance of BTC
  },
  getChart: function(req, res, next) {
    console.log("Enter Into getCurrntPriceOfBTC.....");
      var data={"lastHours": "24","maxRespArrSize": 100}
      request.post({
        url: "https://cex.io/api/price_stats/BTC/USD",
        data:{'lastHours': 24,'maxRespArrSize': 100},
        headers:{'Content-Type':'application/json',
                  'Accept':'application/json'
        }
      }, function(error, response, currentPRiceDetails) {
        if (error) {
          console.log("Returning current price list.....");
          return  res.json( {
            "message": "Error to get current BCH Price",
            statusCode: 400
          });
        }
        else {
          console.log("Returning current price list.....");
          return  res.json( {
            "currentPrice": JSON.parse(currentPRiceDetails),
            statusCode: 200
          });
        }
      });
  },

};
