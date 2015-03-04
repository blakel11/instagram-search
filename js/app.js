angular.module('searchApp', [])
	.controller('SearchCtrl', function($scope, $q, $timeout, $http){
		$scope.click = 0;
		$scope.searchInstagram = function(keyword){
			console.log('click');
			$scope.click = 1;
			$scope.searchTerm = keyword;
			var url = "https://api.instagram.com/v1/tags/" + $scope.keyword + "/media/recent";
			var request = {
			  callback: 'JSON_CALLBACK',
			  client_id: '5232366fc1da49dfa7a343b1c9907d46',
			  count: 20
			};

			$http({
				method : 'JSONP',
				url : url ,
				params : request
			})
			.success(function(data){
				console.log(data.data);
				$timeout(function(){
					if(data.data.length > 0)  {
					  $scope.click = 2;
					  $scope.results = data.data;
					}  else  {
					  $scope.click = 3;
					}
				},2000);
			})
			.error(function(data){
				console.log('Error: ' + data);
				alert("There has been an error: " + data);
			});
		};
	});
