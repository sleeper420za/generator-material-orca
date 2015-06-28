(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['TodoService'];

    /* @ngInject */
    function TodoController(TodoService) {

        //Get Todo List Widget Data
        this.todo = TodoService.todo;

        this.tdResult = TodoService.getTodo(this.todo);

        //Add new Item (closed by default)
        this.addTodoStat = 0;

        //Dismiss
        this.clearTodo = function (event) {
            this.addTodoStat = 0;
            this.todo = '';
        };

        activate();

        ////////////////

        function activate() {}
    }
})();
