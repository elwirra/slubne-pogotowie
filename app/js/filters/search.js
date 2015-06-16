app.filter('searchQuery', function(){
    
    return function(items, name){
        
        var results = [];        
        for (var i=0; i<items.length; i++){
            if (items[i].name == name) {
                results.push(items[i]);
            }
        }
        
        return results;
    };
});

