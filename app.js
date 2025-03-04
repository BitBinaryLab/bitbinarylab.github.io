var app = angular.module('bitBinaryLab', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { templateUrl: "components/home.html" })
    .when("/about", { templateUrl: "components/about.html" })
    .when("/vision", { templateUrl: "components/vision.html" })
    .when("/research", { templateUrl: "components/research.html" })
    .when("/projects", { templateUrl: "components/projects.html" })
    .otherwise({ redirectTo: "/" });
});


app.controller('ThemeController', function($scope) {
    $scope.menuOpen = false;

    $scope.toggleMenu = function() {
        $scope.menuOpen = !$scope.menuOpen;
    };
});

