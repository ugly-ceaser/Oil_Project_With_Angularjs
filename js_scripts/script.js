let app = angular.module("app", ['ngCookies']);

app.controller("MainController", ($scope, $http) => {

    
})





app.controller("loginController", ($scope, $http,$cookies) => {

     $http.get("../assets/user.json").then(res=>{

        $scope.users = res.data;

        $scope.loginUser=()=>{

            let userEmail = $scope.user.email;
            let userPass = $scope.user.password;
    
            for(var i = 0; i < $scope.users.length;i++){
                if($scope.users[i].email===userEmail && $scope.users[i].password===userPass){
                    window.location.href="../portfolio.html";
                    $cookies.putObject("user",$scope.users[i])
                }
                
            }

        }

       
    })
  

    
})

app.controller("portfolioController",($scope,$http,$cookies)=>{
    

    

    $scope.user= $cookies.getObject("user");





})



app.controller("OrderController",($scope,$http,$cookies)=>{
    

    

    $scope.user= $cookies.getObject("user");

    $http.get("../assets/order.json").then(res=>{
        $scope.orders = res.data
        $cookies.putObject("order",$scope.orders)
    })





})