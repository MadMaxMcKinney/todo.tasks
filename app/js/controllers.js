'use strict';

/* Controllers */

angular.module('todoApp.controllers', []).
  controller('todoCtrl', [function($scope) {
  	$scope.todos = [{
  		text: "Get this done",
  		done: false
  	}];
  }])