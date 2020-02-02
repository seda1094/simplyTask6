module.exports = (req, res, next) => {
    const cookie = req.cookies.time
    if (cookie === undefined) {
        const time = moment()
        res.cookie('time', time, {})
        console.log('cookie created successfully')
    }
    else {
        console.log('cookie exists', cookie)
    }
    next()
}