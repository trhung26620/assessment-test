const errCodeMapping = {
    0: {
        errCode: 0,
        message: 'success',
    },
    1: {
        errCode: 1,
        errMessage: 'Error from the server'
    },
    2: {
        errCode: 2,
        errMessage: 'Missing required parameters'
    },
    3: {
        errCode: 3,
        errMessage: 'Empty corpus'
    }
}

module.exports = function handleResponseCode(errCode) {
    return errCodeMapping[errCode]
}