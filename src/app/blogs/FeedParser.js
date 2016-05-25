"use realm";

class FeedParser {
   static getEntries(data) {
      return data.responseData.entries;
   }
}

export FeedParser;
