app.filter("limitReviews",function(){return function(i){categories.$loaded().then(function(i){$filter("limitTo")(review,3)})};return input});