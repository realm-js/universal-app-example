"use realm bridge"
import request from app.utils;

class GoogleBlog {
   static getFeed(value) {
      return new Promise((resolve, reject) => {
         request.get({
            url: "https://ajax.googleapis.com/ajax/services/feed/find?v=1.0",
            json: true,
            qs: {
               q: value
            }
         }, (error, response, body) => {
            return resolve(body)
         });
      });
   }
}
export GoogleBlog;
