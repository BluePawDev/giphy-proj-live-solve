var myApp = angular.module('myApp', []);

// make sure to inject used services
myApp.controller('GiphyController', function(GiphyService) { // injecting custom `GiphyService`
	var vm = this;

	vm.randomGif = function() {
		console.log('in randomGif');
		GiphyService.getRandom().then(function() {
			console.log('back in Controller with:', GiphyService.dataWeWant);
			// hold the data we want in a variable that can reach the DOM
			vm.data = GiphyService.dataWeWant;
		}); // end
	}; // end randomGif
}); // end GiphyController
