import mongoose from "mongoose"
import Theme from "../models/Theme.js"
import User from "../models/User.js"


export const setTheme = async (req, res) => {
    const { backgroundColor, bubbleColor } = req.body
    const id = req.userId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(500).json({
            status: 'error',
            message: 'Invalid id'
        })
    }
    try {
         await User.updateOne(
        { _id: id },
        { $set: { theme: { backgroundColor, bubbleColor } } },
    )
    return res.status(200).json({
        status: 'success',
        message: 'Theme set successfully'
    })
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
   
}

export const setPublicThemes = async (req, res) => {
    try {
        const newTheme = new Theme(req.body)
        console.log(newTheme);
        await newTheme.save()
        console.log(newTheme);
        res.status(200).json(newTheme)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getPublicThemes = async (req, res) => {
    try {
        const themes = await Theme.find()
        res.status(200).json(themes)
    } catch (error) {
        res.status(400).json(error)
    }
}