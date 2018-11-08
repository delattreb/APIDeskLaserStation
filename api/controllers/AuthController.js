/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var bcrypt = require('bcrypt');

module.exports = {
    processSignup: async function (req, res) {
        // Get parameters
        let pfname = req.param('first_name');
        let plname = req.param('last_name');
        let pemail = req.param('email');
        let ppassword = req.param('password');
        let pdescription = req.param('description');

        // Check if User already exists
        let user = await User.findOne({email: pemail});
        if (user) {
            return res.status(400).json('User:' + pemail + ' already exists');
        } else {
            let createuser = await User.create({
                first_name: pfname,
                last_name: plname,
                email: pemail,
                password: ppassword,
                description: pdescription
            });
        }
        res.status(200).json('User:' + pemail + ' created');
    },

    processSignin: async function (req, res) {
        // Get parameters
        let pemail = req.param('email');
        let ppassword = req.param('password');

        // Check if User already exists
        let user = await User.findOne({email: pemail});

        if (!user) {
            return res.status(400).json('User not exists');
        } else {
            bcrypt.compare(ppassword, user.password, function (err, match) {
                if (err) return res.status(400).json(err);
                if (match) {
                    return res.status(200).json('Login !');
                } else {
                    return res.status(400).json('Bad login/password');
                }
            })
        }
    }
};

