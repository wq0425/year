app.controller("formController", function ($scope, $rootScope, $http) {
    $http({
        method: "GET",
        url: "http://localhost:8080/mock"
    }).then(function (result) {
        //console.log(result);
        $scope.datas = result.data;
    }), function (error) {
        console.log(error);
    }
})