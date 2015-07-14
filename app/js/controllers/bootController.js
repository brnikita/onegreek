onegreek.controller('bootController', function($state, $http, $cordovaFacebook, urlFactory, authService, universityService, organizationService) {

    var boot = function() {
        $http.get(urlFactory.bootUrl())
            .then(function(response) {
                var data = response.data;
                universityService.setUniversities(data.universities);
                organizationService.setOrganizations(data.organizations);
                attemptLogin();
            });
    };

    var attemptLogin = function() {
//        $cordovaFacebook.logout();
        $state.go('register.phone');
        /*$cordovaFacebook.getLoginStatus()
            .then(function(success) {
                if(success.status == 'unknown') {
                    $state.go('login');
                } else {
                    var authResponse = success.authResponse;
                    authService.loginByFacebook(authResponse.userID, authResponse.accessToken)
                        .then(function(response) {
                            if(authService.userIsRegistered()) {
                                $state.go('register.phone');
                            } else {
                                $state.go('register.phone');
                            }
                        });
                }
            });*/
    };

    boot();

});