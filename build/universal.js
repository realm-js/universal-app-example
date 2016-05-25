(function(___scope___) { "use strict"; var $isBackend = ___scope___.isNode; var realm  = ___scope___.realm;

realm.module("app.Application",["app.blogs.FeedParser", "app.blogs.GoogleFeed"],function(FeedParser, GoogleFeed){ var $_exports;


class Application {
   static main() {
      GoogleFeed.getFeed("Official Google Blogs").then(function(entries) {
         var entries = FeedParser.getEntries(entries);
         console.log(entries);
      });
   }
}

$_exports = Application;

return $_exports;
});
realm.module("app.blogs.FeedParser",[],function(){ var $_exports;

class FeedParser {
   static getEntries(data) {
      return data.responseData.entries;
   }
}


$_exports = FeedParser;

return $_exports;
});

})(function(self){ var isNode = typeof exports !== 'undefined'; return { isNode : isNode, realm : isNode ? require('realm-js') : window.realm}}());