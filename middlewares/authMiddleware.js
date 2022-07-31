import jwt from 'jsonwebtoken'

const protect =  (req, res, next) => {
    const token = req.header('authToken')
    console.log(token)
    if (!token) return res.status(401).json({
        status: 'error',
        message: 'Access Denied'
    })
    try {
        const {userId} = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = userId
        console.log(userId);
        next()
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        })
    }
}

export default protect