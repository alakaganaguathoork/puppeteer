const axios = require('axios');

    axios.post('http://api.dev.betterchains.net/api/user/login', {
        username               : "ga.ca.koritza@mailinator.com",
        password            : 123123,
        getLoginByCodeLink  : 1
    })
    .then(function(response) {
        console.log(response);
        var json = JSON.parse(this.response, function (key, value) {
            if (key == "token") {
                return value;
            } else {
                return console.log("No token, some error");
            }
        });
        console.log(json);
    })
    .catch(function(error) {
        console.log(error);
    });
