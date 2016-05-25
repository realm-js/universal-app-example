(function(___scope___) { "use strict"; var $isBackend = ___scope___.isNode; var realm  = ___scope___.realm;

"use realm backend-raw";

realm.module("app.utils.request", function() {
   return require("request");
})

realm.module("app.blogs.GoogleFeed",["app.utils.request"],function(request){ var $_exports;

class GoogleBlog {
   static getFeed(value) {
      return new Promise(function(resolve, reject) {
         request.get({
            url: "https://ajax.googleapis.com/ajax/services/feed/find?v=1.0",
            json: true,
            qs: {
               q: value
            }
         }, function(error, response, body) {
            return resolve(body)
         })
      });
   }
}

$_exports = GoogleBlog;

return $_exports;
});

})(function(self){ var isNode = typeof exports !== 'undefined'; return { isNode : isNode, realm : isNode ? require('realm-js') : window.realm}}());