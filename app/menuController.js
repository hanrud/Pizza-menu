'use strict';

app.controller('menuController', [
    '$scope',
    function ($scope) {

        $scope.changeMainDish = function (item) {
            $scope.mainDish.name = item.name;
            $scope.mainDish.price = item.price;
        };
        $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
            toppings: []
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



        $scope.addTopping = function (topping) {
            $scope.model.toppings.push(topping);
            $scope.model.search = null;
        }
    }

]);


