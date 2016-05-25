(function(___scope___) { "use strict"; var $isBackend = ___scope___.isNode; var realm  = ___scope___.realm;

realm.module("app.blogs.GoogleFeed",["realm.router.BridgeRequest"],function(BridgeRequest){ var $_exports;
$_exports = {
'getFeed': function(){return BridgeRequest.connect("app.blogs.GoogleFeed", "getFeed", arguments)}
}
return $_exports;
});

})(function(self){ var isNode = typeof exports !== 'undefined'; return { isNode : isNode, realm : isNode ? require('realm-js') : window.realm}}());