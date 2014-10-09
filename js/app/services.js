(function() {
   'use strict';

   /* Services */

   angular.module('PX2App.services', [])

      // put your services here!
      // .service('serviceName', ['dependency', function(dependency) {}]);

     .service('messageList', ['fbutil', function(fbutil) {
       return fbutil.syncArray('messages', {limit: 10, endAt: null});
     }]);

})();

