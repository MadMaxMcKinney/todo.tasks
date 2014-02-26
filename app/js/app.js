angular.module('todoApp', []).
controller('todoCtrl', ['$scope', function ($scope) {

	$scope.todos = [
		
	];
	
	$scope.addTodo = function(){
		$scope.todos.push({'name': $scope.newTodo,'done': false});
		$scope.newTodo = '';
	}

	$scope.clearCompleted = function(){
		// Using JS filter function, it loops through an array, using the function provided as
		// a check to see if an item should be returned or not. Then it returns a new array
		// with items that pass the tests provided by the function given.
		$scope.todos = $scope.todos.filter(isCompleted);
	}

	// This function will take the objects from the todos array, and for every object that is completed 
	// do not return that object.
	function isCompleted(value, index, ar) {
		if (value.done == true) {
			return false;
		}
		return true;
	}
	
}])
