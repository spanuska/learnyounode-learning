// take 3 urls as CL args, collect the content and print it to the console in the order given

var http = require('http');
var bl = require('bl');
var urlsList = process.argv.slice(2);
var allUrlsData = [];
var count = 0;

var makeGetRequest = function (url, index) {
  http.get(url, function(response) {
    response.pipe(bl(function (err, data) {
      if (err) return console.error(err);

      allUrlsData[index] = data.toString();
      count += 1;
      if (count === urlsList.length) {
        for (var i = 0; i < allUrlsData.length; i++) {
         console.log(allUrlsData[i]);
        }
      }
    }));
  }).on('error', console.error);
};

function makeMultipleGetRequests(arrayOfUrls) {
  for (var urlsListIndex = 0; urlsListIndex < arrayOfUrls.length; urlsListIndex++) {
    makeGetRequest(arrayOfUrls[urlsListIndex], urlsListIndex);
  }
}

makeMultipleGetRequests(urlsList);