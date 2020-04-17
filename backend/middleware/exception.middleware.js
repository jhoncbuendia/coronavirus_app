const formatHttpError = (code) => {
    let errorFormated

    switch (code) {
        case 422:
            errorFormated = {
                code: 422,
                message: 'Country not found'
            }
            break;
    
        default:
            errorFormated = {
                code: 400,
                message: 'Bad request'
            }
            break;
    }
    return errorFormated
}

class ExceptionMiddleware {
    apiExceptionHandler(err, req, res, next) {
        const errorFormated = formatHttpError(err.code)
        res.json(errorFormated)
    }
}

module.exports = new ExceptionMiddleware()