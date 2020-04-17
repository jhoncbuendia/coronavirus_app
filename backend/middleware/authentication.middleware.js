class AuthenticationMiddleware {

    jwt(req, res, next) {
        const validTokens = ["abc", "dfg", "hij"]
        const tokenFromRequest = req.headers['authorization']
        const error = {code: 400}

        if(tokenFromRequest) {
            const tokenFound = validTokens.find(token => token == tokenFromRequest)
            if(tokenFound) next()
            else next(error)
        } else {
            next(error)
        }
    }
    
}

module.exports = new AuthenticationMiddleware()