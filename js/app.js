angular.module('searchApp', [])
	.controller('SearchCtrl', function($scope, $q, $timeout, $http){
		$scope.searchInstagram = function(keyword){
			console.log('click');
			$scope.keyword = keyword;

			var url = "https://api.instagram.com/v1/tags/" + $scope.keyword + "/media/recent";
			var request = {
			  callback: 'JSON_CALLBACK',
			  client_id: '5232366fc1da49dfa7a343b1c9907d46',
			  count: 10
			};

			$http({
				method : 'GET',
				url : url ,
				params : request
			})
			.success(function(data){
				console.log(data);
				$scope.results = data;
			})
			.error(function(data){
				console.log('Error');
			});
		};
	});
