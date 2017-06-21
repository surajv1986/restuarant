var myHotelApp=angular.module('HotelApp',['ui.bootstrap','ui.router']);

myHotelApp.config( function($stateProvider,$urlRouterProvider){

  $stateProvider
    .state('Home',{
      url: "/Home",
      templateUrl: "partials/Home.html",
      
   })

   $stateProvider
    .state('Snacks',{
      url: "/Snacks",
      templateUrl: "partials/Snacks.html",
      
   })

    $stateProvider
    .state('Lunch',{
      url: "/Lunch",
      templateUrl: "partials/Lunch.html",
      
   })

   $stateProvider
    .state('Dinner',{
      url: "/Dinner",
      templateUrl: "partials/Dinner.html",
      
   })
   $urlRouterProvider.otherwise('/Home');
  }
);