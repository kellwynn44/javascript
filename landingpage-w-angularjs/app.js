var landingPageApp = angular.module("landingPageApp", []);

//landingPageApp.config(function () {});

//landingPageApp.run();

landingPageApp.controller("LandingPageController", [
  "$scope",
  function ($scope) {
    $scope.message = "Plan Your Final Journey";

    $scope.removeDestination = function (destination) {
      var removedDestination = $scope.destinations.indexOf(destination);

      $scope.destinations.splice(removedDestination, 1);
    };

    $scope.destinations = [
      {
        type: "shipwreck tour",
        location: "Black Sea"
      },
      {
        type: "fire and brimstone tour",
        location: "Hawaii"
      },
      {
        type: "enigma tour",
        location: "Great Pyramid"
      },
      {
        type: "haunting tour",
        location: "Winchester House"
      },
      {
        type: "secret places tour",
        location: "hidden cavern"
      },
      {
        type: "natural disasters tour",
        location: "tornado alley"
      }
    ];
  }
]);
