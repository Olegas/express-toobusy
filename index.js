var toobusy = require('toobusy');

module.exports = function(maxLag) {

   if (maxLag) {
      toobusy.maxLag(maxLag);
   }

   return function expressToobusy(req, res, next) {
      if (toobusy()) {
         res.send(503, "Server is too busy. Please, try again later.");
      } else {
         next();
      }
   }

};