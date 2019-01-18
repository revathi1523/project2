/**
 * 
 */
app.factory('UserService',function($http){
	var userService={}
	var BASE_URL="http://localhost:8024/projectmiddleware"
	
	userService.registerUser=function(user){//user <- usercontroller  <-registrationform.html
	 return	$http.post(BASE_URL+ "/register",user)
	}
	
	userService.login=function(user){
		return $http.put(BASE_URL+"/login",user)
	}
	
	userService.getProtectedResource=function(){
		return $http.get(BASE_URL + "/protectedresource")
	}
	
	userService.logout=function(user){
		return $http.put(BASE_URL + "/logout",user)
	}

	userService.getUser=function(){
		return $http.get(BASE_URL + "/getuser")
	}
	userService.update=function(user){
		return $http.put(BASE_URL +"/updateprofile",user)
	}
	    
	
	return userService;
})