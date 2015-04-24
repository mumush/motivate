// Ionic Motivate App

var app = angular.module('motivate', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/summary')


   //*** App Level State ***

   $stateProvider.state('app', {
     abstract: true,
     templateUrl: 'templates/main.html'
   })



   //*** Summary States ***

   $stateProvider.state('app.summary', {
      abstract: true,
      url: '/summary',
      views: {
         summary: {
            template: '<ion-nav-view></ion-nav-view>'
         }
      }
   })

   $stateProvider.state('app.summary.index', {
      url: '',
      templateUrl: 'templates/summary.html'
   })

   $stateProvider.state('app.summary.search', {
      url: '/summary/search-food',
      templateUrl: 'templates/search-food.html'
   })

   $stateProvider.state('app.summary.add', {
      url: '/summary/add-food',
      templateUrl: 'templates/add-food.html'
   })



   //*** Food Log States ***


   $stateProvider.state('app.log', {
      url: '/log',
      views: {
         log: {
            templateUrl: 'templates/log.html'
         }
      }
   })



   //*** Progress States ***


   $stateProvider.state('app.progress', {
      url: '/progress',
      views: {
         progress: {
            templateUrl: 'templates/progress.html'
         }
      }
   })



   //*** Settings States ***

   $stateProvider.state('app.settings', {
      url: '/settings',
      views: {
         settings: {
            templateUrl: 'templates/settings.html'
         }
      }
   })

})

app.controller('FoodsCtrl', function($scope) {

   $scope.recentFoods = [
      {name: "Wegmans Sliced Turkey Breast"},
      {name: "White Sliced Bread"},
      {name: "Wegmans Thin Sliced Pepperjack Cheese"},
      {name: "Heinz Mustard"},
      {name: "White Sliced Bread"},
      {name: "Wegmans Thin Sliced Pepperjack Cheese"},
      {name: "Heinz Mustard"},
      {name: "Wegmans Sliced Turkey Breast"},
      {name: "Wegmans Cup Noodle"}
   ]

   $scope.resultFoods = [
      {name: "Wegmans cup of noodles"},
      {name: "Wegmans ramen noodle beef sauce"},
      {name: "Wegmans ramen noodle chicken sauce"},
      {name: "Wegmans cup noodle "},
      {name: "Vegetable Ramen noodle"},
      {name: "Lobster ramen noodle pasta"},
      {name: "Wegmans rapid ramen"},
      {name: "Wegmans easy-ramen"},
      {name: "Wegmans ramen quick eats"},
      {name: "Shrimp ramen noodle"}
   ]

   $scope.submitSearch = function() {

      cordova.plugins.Keyboard.close();

      document.getElementById("recentFoods").style.display = "none";
      document.getElementById("resultFoods").style.display = "block";
   }


})

app.controller('ServingSizeCtrl', function($scope, $ionicPopover, $ionicHistory) {

   $ionicPopover.fromTemplateUrl('templates/size-popover.html', {
     scope: $scope
   }).then(function(popover) {
     $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
     $scope.popover.show($event);
   };
   $scope.closePopover = function() {
     $scope.popover.hide();
   };
   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
     $scope.popover.remove();
   });
   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
     // Execute action
   });
   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
     // Execute action
   });

   $scope.changeServingSize = function($event) {

      var sizeBut = document.getElementById("servingSizeBut");
      sizeBut.innerHTML = $event.currentTarget.innerHTML + " <i class='ion-android-arrow-dropdown'></i>";
      sizeBut.style.color = "#33332D";

      var calNumber = document.getElementById("totalCalsCount");
      calNumber.innerHTML = (Math.floor(Math.random() * 800) + 200) + "";

      $scope.closePopover();

   };

   $scope.backToHome = function() {

      $ionicHistory.clearHistory();
   };


})

app.controller('ServingTypeCtrl', function($scope, $ionicPopover) {

   $ionicPopover.fromTemplateUrl('templates/serving-popover.html', {
     scope: $scope
   }).then(function(popover) {
     $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
     $scope.popover.show($event);
   };
   $scope.closePopover = function() {
     $scope.popover.hide();
   };
   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
     $scope.popover.remove();
   });
   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
     // Execute action
   });
   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
     // Execute action
   });


   $scope.changeServingType = function($event) {

      var typeBut = document.getElementById("servingTypeBut");
      typeBut.innerHTML = $event.currentTarget.innerHTML + " <i class='ion-android-arrow-dropdown'></i>";
      typeBut.style.color = "#33332D";

      var calNumber = document.getElementById("totalCalsCount");
      calNumber.innerHTML = (Math.floor(Math.random() * 800) + 200) + "";

      $scope.closePopover();

   };


})


app.controller('SummaryGroupsCtrl', function($scope) {

   $scope.calories = {
      label: 'See contributing foods',
      foods: [
         {name: "Wegmans Cup Noodle", quantity: "240 calories"},
         {name: "Whole Wheat Bagel", quantity: "50 calories"},
         {name: "Pepsi Soda", quantity: "60 calories"},
         {name: "Pepperoni Pizza", quantity: "714 calories"},
         {name: "Fountain Water", quantity: "35 calories"}
      ]
   }

   $scope.protein = {
      label: 'See contributing foods',
      foods: [
         {name: "Wegmans Cup Noodle", quantity: "5 grams"},
         {name: "Pepsi Soda", quantity: "1 gram"},
         {name: "Pepperoni Pizza", quantity: "10 grams"}
      ]
   }

   $scope.carbs = {
      label: 'See contributing foods',
      foods: [
         {name: "Wegmans Cup Noodle", quantity: "6 grams"},
         {name: "Whole Wheat Bagel", quantity: "30 grams"},
         {name: "Pepsi Soda", quantity: "13 grams"},
         {name: "Pepperoni Pizza", quantity: "32 grams"}
      ]
   }

   $scope.fats = {
      label: 'See contributing foods',
      foods: [
         {name: "Wegmans Cup Noodle", quantity: "22 grams"},
         {name: "Pepsi Soda", quantity: "5 grams"},
         {name: "Pepperoni Pizza", quantity: "32 grams"}
      ]
   }

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

})


app.controller('FoodLogCtrl', function($scope) {

   $scope.friday = {
      label: 'See contributing foods',
      foods: [
         {name: "Wegmans Cup Noodle", quantity: "1 cup"},
         {name: "Whole Wheat Bagel", quantity: "2 bagels"},
         {name: "Pepsi Soda", quantity: "1 can"},
         {name: "Pepperoni Pizza", quantity: "2 slices"},
         {name: "Fountain Water", quantity: "3 cups"}
      ]
   }

   $scope.thursday = {
      label: 'See contributing foods',
      foods: [
         {name: "White Sliced Bread", quantity: "4 slices"},
         {name: "Turkey Breast", quantity: "3 teaspoons"},
         {name: "Pepperjack Cheese", quantity: "4 slices"},
         {name: "Diet Coke", quantity: "1 can"}
      ]
   }

   $scope.wednesday = {
      label: 'See contributing foods',
      foods: [
         {name: "Wegmans Pulled Pork", quantity: "2 scoops"},
         {name: "Wegmans Potato Salad", quantity: "1 scoop"},
         {name: "Wegmans Diced Squash", quantity: "1 scoop"},
         {name: "Blue Naked Juice", quantity: "1 bottle"}
      ]
   }


  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

})

app.controller('CameraCtrl', function($scope, $cordovaCamera) {

   $scope.launchCamera = function() {

      var options = {
          quality : 75,
          destinationType : Camera.DestinationType.DATA_URL,
          sourceType : Camera.PictureSourceType.CAMERA,
          allowEdit : true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 300,
          targetHeight: 300,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
           $scope.imgURI = "data:image/jpeg;base64," + imageData;
      }, function(err) {
           // An error occured. Show a message to the user
      });

   };

})

app.controller('MotivateCtrl', function($scope, $ionicPopup) {

    // A confirm dialog
    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Motivate Nate',
        buttons: [{text: "CANCEL"}, {text: "SEND", onTap: motivateSentSuccess}],
        templateUrl: 'templates/motivate-popup.html'
      });

    };

   setTimeout(function() {showCard();}, 5000);

   function showCard() {
      console.log("hello");
      document.getElementById("motivateSomeoneCard").style.display = "block";
   }

   function motivateSentSuccess() {

      document.getElementById("motivateSomeoneCard").style.display = "block";
      document.getElementById("snackbarText").innerHTML = "Your message was sent!";
      document.getElementById("snackbarButton").style.display = "none";

      setTimeout(function(){
         document.getElementById("motivateSomeoneCard").style.display = "none";
      }, 3000);

   }


   //Motivate button tapped
   $scope.composeMotivateModal = function() {

      $scope.showConfirm();
      document.getElementById("motivateSomeoneCard").style.display = "none";

   }

})



app.controller('GetMotivatedCtrl', function($scope, $ionicPopup) {

    // A confirm dialog
    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        buttons: [{text: "OKAY"}],
        templateUrl: 'templates/get-motivated-popup.html'
      });

    };

   setTimeout(function() {showCard();}, 5000);

   function showCard() {
      console.log("hello");
      document.getElementById("getMotivatedCard").style.display = "block";
   }


   //Motivate button tapped
   $scope.seeMotivation = function() {

      $scope.showConfirm();
      document.getElementById("getMotivatedCard").style.display = "none";

   }

})



app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
