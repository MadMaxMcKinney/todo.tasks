angular.module('todoApp', []).
controller('todoCtrl', ['$scope', function ($scope) {

	$scope.todos = [
		{'name': "Get this done", 'done': false}
	];

	$scope.addTodo = function(){
		$scope.todos.push({'name': $scope.newTodo,'done': false})
		$scope.newTodo = ''
	}
	
	// TODO: (1) Fix bug where clearing the completed tasks keeps an "empty" item in the array.
	$scope.clearCompleted = function(){
		// Set the list of todos to the everything that isn't "done" yet.
		// Basically this makes it seem like we are removing the items that are compelted.
		$scope.todos = $scope.todos.filter(function(item){
			return !item.done
		})
	}
	
}])
