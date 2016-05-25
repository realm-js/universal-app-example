"use realm bridge"
import request from app.utils;

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
export GoogleBlog;
