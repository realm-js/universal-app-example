"use realm";

import FeedParser, GoogleFeed from app.blogs;

class Application {
   static main() {
      GoogleFeed.getFeed("Official Google Blogs").then(function(entries) {
         var entries = FeedParser.getEntries(entries);

         if (!$isBackend) { // For demo puproses
            document.querySelector('pre').innerHTML = JSON.stringify(entries, 2, 2);
         }

         console.log(entries);
      });
   }
}
export Application;
