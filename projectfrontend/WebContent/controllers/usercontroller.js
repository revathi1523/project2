/**
 * 
 */
app.controller('UserCtrl',function($scope,$rootScope,UserService,$location,$cookieStore){
	$scope.registerUser=function(user){
		//call a function in service
		UserService.registerUser(user).then(function(response){
			alert('Registered successfully... Please login')
			$location.path('/login')
		},function(response){
			//response.data -> ErrorClazz object
			$scope.error=response.data
		})
	}
	
	$scope.login=function(user){
		UserService.login(user).then(function(response){
			//response.data= User object with values for all properties
			$rootScope.user=response.data
			$cookieStore.put('user',response.data)
			$location.path('/home')
		},function(response){
			$scope.error=response.data //response.data=ErrorClazz
		})
	}
	if($rootScope.user!=undefined){
	UserService.getProtectedResource().then(function(response){
		$scope.message="YOU ARE AUTHORIZED"
	},function(response){
		$scope.error=response.data
	})
	}
	
	
	$scope.update=function(user){
		UserService.update(user).then(function(response){
			alert("updated the details successfully...")
			$rootScope.user=response.data//updated user object
			$cookieStore.put('user',response.data)
			$location.path('/home')
		},function(response){
			
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	if($rootScope.user!=undefined){
		UserService.getUser().then(function(response){
			$scope.user=response.data
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
})

