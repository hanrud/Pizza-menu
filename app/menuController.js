'use strict';

app.controller('menuController', ['$scope', function ($scope) {
    $scope.model = {
        title: 'Our Menu'
    };

    $scope.mainDish = [{
        name: 'Cheese Pizza',
        price: 11
    }, {
        name: 'Pepperoni Pizza',
        price: 12
    }, {
        name: 'Margherita Pizza',
        price: 12
    }, {
        name: 'BBQ Chicken Pizza',
        price: 12
    }, {
        name: 'Combo Pizza',
        price: 12
    }];

    $scope.changeMainDish = function (item) {
        $scope.mainDish.name = item.name;
        $scope.mainDish.price = item.price;
    };

}
]);