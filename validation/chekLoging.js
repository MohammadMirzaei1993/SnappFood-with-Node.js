
const { compareWebToken } = require("../modules/utils")

const chekTokn = (req, res, next) => {
    try {

        const result = compareWebToken(req.headers.authorization.slice(7))
        req.result = result.data
        //console.log(req.result)

        next()
    } catch (error) {
        next({
            status: 401,
            message: "لطفا وارد شوید"
        })
    }
}


module.exports = { chekTokn }