module.exports = function (req, res, next) {
    let whitelist = ["127.0.0.1", "www.linkt.com"]; // Add values if needed

    if (whitelist.includes(req.host)) {
        next();
    } else {
        console.log(req.host);
        res.status(400).json("Not allowed");
    }
};