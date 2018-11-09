/**
 * ModuleespController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    updateESP: async function (req, res) {
        let namep = req.param('name')
        let statp = req.param('state')
        let result = await Customer.findOne({ name: namep })
        if (!result) {
            return res.notFound('No record found')
        }
        return res.json(result);
    },
};

