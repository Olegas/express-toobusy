var toobusy = require('toobusy-js');

module.exports = function(maxLag) {

   if (maxLag) {
      toobusy.maxLag(maxLag);
   }

   return function expressToobusy(req, res, next) {
      if (toobusy()) {
         res.status(503).send("Server is too busy. Please, try again later.");
      } else {
         next();
      }
   }

};
