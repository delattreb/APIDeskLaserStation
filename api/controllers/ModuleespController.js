/**
 * ModuleespController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    updateESP: async function (req, res) {
        let namep = req.param('name')
        let connectedp = req.param('connected')
        let result = await Moduleesp.findOne({ name: namep })
        if (!result) {
            await Moduleesp.create({ name: namep, connected: connectedp });
        } else {
            sails.log(result.id)
            result = await Moduleesp.update({ id: result.id }).set({ connected: connectedp });
        }
        return res.json(result);
    },
};

