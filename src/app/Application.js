"use realm";

import FeedParser, GoogleFeed from app.blogs;

class Application {
   static main() {
      console.log("STARTING OUT APPLICATION HERE>");
      GoogleFeed.getFeed("Official Google Blogs").then(function(entries) {
         var entries = FeedParser.getEntries(entries);

         console.log(entries);
      });
   }
}
export Application;
