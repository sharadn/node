var promiseDemo = (function(){

	/*
		This example is showing the callback method
	*/
	var makeRequest = function(callback){
		var ajaxRequest = new XMLHttpRequest();
		ajaxRequest.addEventListener("load", function(){
			//console.log('response:', this.response);
			return callback(this.response);
		});
		ajaxRequest.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
		ajaxRequest.send();
	};


	/*
		This example is showing the promises method
	*/
	var promiseRequest = function(){
		var promise1 = new Promise(function(resolve, reject){
			var ajaxRequest = new XMLHttpRequest();
			ajaxRequest.addEventListener("load", function(){
				//console.log('Promise reposne response:', this.response);
				if(this.status === 200){
					resolve(this);
				} else {
					reject(this);
				}
			});
			ajaxRequest.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
			ajaxRequest.send();
		});
		return promise1;
	};

	return {
		getPostsCallback: function(callback){
			makeRequest(callback);
		},

		promiseDemo: function(callback){
			promiseRequest().then(function(result){
			   //console.log('Promise reposne:', result.response);
			   document.getElementById("promise-response").innerHTML = result.response;
			}, function(error){
				console.log('error:', error);
			});
		}
	};
})();

/*

*/