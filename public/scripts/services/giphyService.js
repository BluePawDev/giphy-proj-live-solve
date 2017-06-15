myApp.service('GiphyService', function($http) {
	var sv = this;

	sv.getRandom = function() {
		console.log('in getRandom');
		// make $http call to Giphy
		var apiURL = 'http://api.giphy.com/v1/gifs/search?q=yes&api_key=dc6zaTOxFJmzC';
		return $http.get(apiURL).then(function(response) {
			console.log('back from $http get call with:', response);
			sv.dataWeWant = response.data.data;

		}); // end $http
	}; // end getRandom
}); // end GiphyService
