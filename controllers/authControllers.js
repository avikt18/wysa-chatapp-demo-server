import User  from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email.toLowerCase() })
        if (!user) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid Credentials!'
            })
        }

        const verify = await bcrypt.compare(password, user.password)
        if (verify) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' })

            return res.status(200).json({
                status: 'success',
                message: 'Logged in',
                authToken: token,
                user : user.theme ? {firstname: user.firstname, theme: user?.theme} : {firstname: user.firstname} 
            })
        } else {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid Credentials!'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }


}

export const signup = async (req, res) => {
    const { firstname, lastname, email, password } = req.body

    const existingUser = await User.findOne({ email: email.toLowerCase() })

    if (existingUser)
        return res.status(409).json({ status: 'error', message: "Email id already registered." });

    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    console.log(hash)
    try {
        const user = new User({ firstname, lastname, email: email.toLowerCase(), password: hash })
        await user.save()
        res.status(200).json({
            status: 'success',
            id: user._id,
            message: 'registered'
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}