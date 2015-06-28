(function () {
    'use strict';

    angular
        .module('app.core')
        .service('TodoService', TodoService);

    TodoService.$inject = ['$resource'];

    /* @ngInject */
    function TodoService($resource) {
        this.getTodo = function (todo) {
            var todoList = $resource('data/todo.json');

            return todoList.get({
                todo: todo
            });
        };

        ////////////////

        function func() {

        }
    }
})();
