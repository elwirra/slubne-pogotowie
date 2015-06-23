app.filter('myFilter', function(){ 
       function myFilter(elms, filters) {
            if(categories.$loaded()) {
              $filter('limitTo');
            } else {
              // return all 
            }
          }
});