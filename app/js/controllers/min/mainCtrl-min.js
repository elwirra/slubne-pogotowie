app.controller("mainCtrl",function(e,r,i,o){var c=new Firebase("https://scorching-torch-1515.firebaseio.com"),s=new Firebase("https://scorching-torch-1515.firebaseio.com/0/categories"),t=new Firebase("https://scorching-torch-1515.firebaseio.com/0/reviews");e.data=o(c),e.categories=o(s),e.reviews=o(t)});