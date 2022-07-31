import mongoose from "mongoose"

export const themeSchema = new mongoose.Schema({
    themeName: String,
    backgroundColor: String,
    bubbleColor: String,
})

export default mongoose.model('Theme', themeSchema)