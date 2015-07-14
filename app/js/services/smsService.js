onegreek.service('smsService', function($http) {
    return {
        /**
         *
         * @param phone
         * @param callback
         * @returns {*}
         */
        sendSMS: function(phone, callback) {
            $http.get("/smsProxy/get/"+phone).success(function (data, status) {
                console.log("All good, Satus:"+status+" Data: "+data);
                callback(data);
            }).error(function (data, status) {
                console.log("All bad, Satus:"+status+" Data: "+data);
                callback(data);
            });
        },
        checkSMS: function(phone, code, callback) {
            $http.get("/smsProxy/check/"+phone+"/"+code).success(function (data, status) {
                console.log("All good, Satus:"+status+" Data: "+data);
                callback(data);
            }).error(function (data, status) {
                console.log("All bad, Satus:"+status+" Data: "+data);
                callback(data);
            });
        }
    };
});