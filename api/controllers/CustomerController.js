/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
/*    signup: function (req, res) {
        var username = req.param("username");
        var password = req.param("password");

        Users.findByUsername(username).done(function (err, usr) {
            if (err) {
                res.send(500, {error: "DB Error"});
            } else if (usr) {
                res.send(400, {error: "Username already Taken"});
            } else {
                var hasher = require("password-hash");
                password = hasher.generate(password);

                Users.create({username: username, password: password}).done(function (error, user) {
                    if (error) {
                        res.send(500, {error: "DB Error"});
                    } else {
                        req.session.user = user;
                        res.send(user);
                    }
                });
            }
        });
    }*/
};

