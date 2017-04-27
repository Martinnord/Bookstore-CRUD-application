var myApp = angular.module('myApp', ['ngRoute'])

// Setting up all the routes
myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
            controller: 'BooksController',
            templateUrl: 'views/books.html'
        })
        .when('/books', {
            controller: 'BooksController',
            templateUrl: 'views/books.html'
        })
        .when('/books_details/:id', {
            controller: 'BooksController',
            templateUrl: 'views/books_details.html'
        })
        .when('/books/add/', {
            controller: 'BooksController',
            templateUrl: 'views/add_book.html'
        })
        .when('/edit_book/:id', {
            controller: 'BooksController',
            templateUrl: 'views/edit_book.html'
        })
        .otherwise({
            redirectTo: '/'
        })
})
